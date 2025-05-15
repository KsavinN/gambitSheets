import { prisma, Sport } from '@gambitsheets/database'; // Import Prisma client
import { getSports } from '../api/oddsAPI';

export class SportsService {
  private static instance: SportsService;


  public static getInstance(): SportsService {
    if (!SportsService.instance) {
      SportsService.instance = new SportsService();
    }
    return SportsService.instance;
  }


  async getSportsFromDb(): Promise<Sport[]> {
    return prisma.sport.findMany();
  }

  async syncSportsWithDb(): Promise<void> {
    try {
      const sportsFromApi = await getSports();

      if (!sportsFromApi || sportsFromApi.length === 0) {
        console.log('No sports fetched from API to sync.');
        return;
      }

      for (const sport of sportsFromApi) {
        await prisma.sport.upsert({
          where: { key: sport.key }, // Unique identifier
          update: { // Fields to update if sport exists
            active: sport.active,
            group: sport.group,
            description: sport.description,
            title: sport.title,
            hasOutrights: sport.has_outrights, // Ensure field name matches schema
          },
          create: { // Fields to create if sport doesn't exist
            key: sport.key,
            active: sport.active,
            group: sport.group,
            description: sport.description,
            title: sport.title,
            hasOutrights: sport.has_outrights, // Ensure field name matches schema
          },
        });
      }
      console.log('Sports have been successfully synced with the database.');
    } catch (error) {
      console.error('Error syncing sports with database:', error);
      throw new Error('Failed to sync sports with database.');
    }
  }
}





