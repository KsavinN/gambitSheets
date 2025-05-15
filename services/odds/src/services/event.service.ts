import { prisma } from '@gambitsheets/database';
import { getEventsBySportKey, GetEventsOptions } from '../api/oddsAPI';
import { Outcome as OutcomeFromApi, Event } from '../types/events';

export class EventService {
  private static instance: EventService;

  // Private constructor for singleton
  private constructor() { }

  public static getInstance(): EventService {
    if (!EventService.instance) {
      EventService.instance = new EventService();
    }
    return EventService.instance;
  }

  /**
   * Retrieves all events from the database
   * @returns Promise<Event[]> Array of all events
   */
  async getAllEvents(): Promise<Event[]> {
    return await prisma.event.findMany({
      include: {
        sport: true,
        bookmakerEntries: {
          include: {
            markets: {
              include: {
                outcomes: true
              }
            }
          }
        }
      }
    });
  }

  async getEventsBySportKey(sportKey: string): Promise<Event[]> {
    return await prisma.event.findMany({
      where: {
        sportKey: sportKey,
      },
      include: {
        sport: true,
        bookmakerEntries: {
          include: {
            markets: {
              include: {
                outcomes: true
              }
            }
          }
        }
      }
    });
  }

  /**
   * Fetches events for a given sportKey from the API and syncs them with the local database.
   * @param sportKey The sport key (e.g., 'americanfootball_nfl').
   * @param options Optional parameters for fetching events from the API.
   */
  public async syncEventsWithDb(sportKey: string, options?: GetEventsOptions): Promise<void> {
    console.log(`Starting event sync for sport: ${sportKey}`);

    const defaultApiOptions: GetEventsOptions = {
      markets: 'h2h,spreads', // Default markets to sync
      regions: 'us', // Default region
      dateFormat: 'iso',
      oddsFormat: 'decimal',
      // Set includeLinks, includeSids, includeBetLimits to false as these fields are not in the current DB schema
      includeLinks: false,
      includeSids: false,
      includeBetLimits: true,
    };

    const apiOptions = { ...defaultApiOptions, ...options };

    try {
      const eventsFromApi = await getEventsBySportKey(sportKey, apiOptions);

      if (!eventsFromApi || eventsFromApi.length === 0) {
        console.log(`No events found for sport ${sportKey} from API with options:`, apiOptions);
        return;
      }

      for (const eventApi of eventsFromApi) {
        // Use a transaction to ensure all related data for an event is saved or none is.
        await prisma.$transaction(async (tx) => {
          const dbEvent = await tx.event.upsert({
            where: { id: eventApi.id },
            update: {
              sportKey: eventApi.sport_key,
              sportTitle: eventApi.sport_title,
              commenceTime: new Date(eventApi.commence_time),
              homeTeam: eventApi.home_team,
              awayTeam: eventApi.away_team,
            },
            create: {
              id: eventApi.id,
              sportKey: eventApi.sport_key,
              sportTitle: eventApi.sport_title,
              commenceTime: new Date(eventApi.commence_time),
              homeTeam: eventApi.home_team,
              awayTeam: eventApi.away_team,
            },
          });

          for (const bookmakerApi of eventApi.bookmakers) {
            const dbBookmakerEntry = await tx.bookmakerEntry.upsert({
              where: { eventId_key: { eventId: dbEvent.id, key: bookmakerApi.key } },
              update: {
                title: bookmakerApi.title,
                lastUpdate: new Date(bookmakerApi.last_update),
              },
              create: {
                eventId: dbEvent.id,
                key: bookmakerApi.key,
                title: bookmakerApi.title,
                lastUpdate: new Date(bookmakerApi.last_update),
              },
            });

            for (const marketApi of bookmakerApi.markets) {
              const dbMarket = await tx.market.upsert({
                where: { bookmakerEntryId_key: { bookmakerEntryId: dbBookmakerEntry.id, key: marketApi.key } },
                update: {
                  lastUpdate: new Date(marketApi.last_update),
                },
                create: {
                  bookmakerEntryId: dbBookmakerEntry.id,
                  key: marketApi.key,
                  lastUpdate: new Date(marketApi.last_update),
                },
              });

              for (const outcomeApi of marketApi.outcomes) {
                const currentOutcomeApi = outcomeApi as OutcomeFromApi;
                const outcomeData = {
                  price: currentOutcomeApi.price,
                  betLimit: currentOutcomeApi.bet_limit !== undefined ? currentOutcomeApi.bet_limit : null,
                };
                await tx.outcome.upsert({
                  where: { marketId_name: { marketId: dbMarket.id, name: currentOutcomeApi.name } },
                  update: outcomeData,
                  create: {
                    marketId: dbMarket.id,
                    name: currentOutcomeApi.name,
                    ...outcomeData,
                  },
                });
              }
            }
          }
        });
        console.log(`Successfully synced event ${eventApi.id} and its related data.`);
      }
      console.log(`Event sync completed for sport: ${sportKey}`);
    } catch (error) {
      console.error(`Error syncing events for sport ${sportKey}:`, error);
      throw new Error(`Failed to sync events for sport ${sportKey}.`);
    }
  }
}
