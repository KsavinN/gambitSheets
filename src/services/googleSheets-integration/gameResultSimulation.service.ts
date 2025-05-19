export interface MatchOdds {
  homeTeam: string;
  awayTeam: string;
  homeOdds: number;
  awayOdds: number;
  drawOdds?: number;
}

export interface MatchResult {
  homeTeam: string;
  awayTeam: string;
  homeScore: number;
  awayScore: number;
  winner: 'Home' | 'Away' | 'Draw';
  totalGoals: number;
}

export class GameResultSimulationService {
  /**
   * Converts odds to probabilities
   */
  private oddsToProbability(odds: number): number {
    return 1 / odds;
  }

  /**
   * Normalizes probabilities to sum to 1
   */
  private normalizeProbabilities(probs: number[]): number[] {
    const sum = probs.reduce((a, b) => a + b, 0);
    return probs.map(p => p / sum);
  }

  /**
   * Simulates a single match result based on odds
   */
  simulateMatchResult(matchOdds: MatchOdds): MatchResult {
    // Convert odds to probabilities
    const homeProb = this.oddsToProbability(matchOdds.homeOdds);
    const awayProb = this.oddsToProbability(matchOdds.awayOdds);
    const drawProb = matchOdds.drawOdds ? this.oddsToProbability(matchOdds.drawOdds) : 0.2;

    // Normalize probabilities
    const [normalizedHome, normalizedAway, normalizedDraw] = this.normalizeProbabilities([
      homeProb,
      awayProb,
      drawProb
    ]);

    // Generate random number for outcome
    const random = Math.random();
    let winner: 'Home' | 'Away' | 'Draw';
    let homeScore: number;
    let awayScore: number;

    // Determine winner based on probabilities
    if (random < normalizedHome) {
      winner = 'Home';
      homeScore = this.generateWinningScore();
      awayScore = this.generateLosingScore(homeScore);
    } else if (random < normalizedHome + normalizedAway) {
      winner = 'Away';
      awayScore = this.generateWinningScore();
      homeScore = this.generateLosingScore(awayScore);
    } else if (random < normalizedHome + normalizedAway + normalizedDraw) {
      winner = 'Draw';
      homeScore = this.generateDrawScore();
      awayScore = homeScore;
    } else {
      // Fallback to home win if probabilities don't add up
      winner = 'Home';
      homeScore = this.generateWinningScore();
      awayScore = this.generateLosingScore(homeScore);
    }

    return {
      homeTeam: matchOdds.homeTeam,
      awayTeam: matchOdds.awayTeam,
      homeScore,
      awayScore,
      winner,
      totalGoals: homeScore + awayScore
    };
  }

  /**
   * Generates a realistic winning score
   */
  private generateWinningScore(): number {
    // Probability distribution for winning scores
    const scores = [1, 2, 3, 4, 5];
    const weights = [0.3, 0.4, 0.2, 0.08, 0.02];

    const random = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < scores.length; i++) {
      cumulativeWeight += weights[i];
      if (random < cumulativeWeight) {
        return scores[i];
      }
    }

    return 1; // Fallback
  }

  /**
   * Generates a realistic losing score
   */
  private generateLosingScore(winningScore: number): number {
    // Higher chance of 0 or 1 goal when losing
    const maxScore = Math.min(winningScore - 1, 2);
    const scores = Array.from({ length: maxScore + 1 }, (_, i) => i);
    const weights = scores.map(score => 1 - (score / (maxScore + 1)));

    const random = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < scores.length; i++) {
      cumulativeWeight += weights[i];
      if (random < cumulativeWeight) {
        return scores[i];
      }
    }

    return 0; // Fallback
  }

  /**
   * Generates a realistic draw score
   */
  private generateDrawScore(): number {
    // Probability distribution for draw scores
    const scores = [0, 1, 2, 3];
    const weights = [0.2, 0.5, 0.25, 0.05];

    const random = Math.random();
    let cumulativeWeight = 0;

    for (let i = 0; i < scores.length; i++) {
      cumulativeWeight += weights[i];
      if (random < cumulativeWeight) {
        return scores[i];
      }
    }

    return 1; // Fallback
  }

  /**
   * Simulates multiple match results
   */
  simulateMultipleResults(matches: MatchOdds[]): MatchResult[] {
    return matches.map(match => this.simulateMatchResult(match));
  }

  /**
   * Simulates a season of matches with realistic patterns
   */
  simulateSeason(matches: MatchOdds[]): MatchResult[] {
    // Sort matches by date if available
    const sortedMatches = [...matches];

    // Simulate results with some correlation between matches
    const results: MatchResult[] = [];
    let homeForm = 0; // Track home team form
    let awayForm = 0; // Track away team form

    for (const match of sortedMatches) {
      // Adjust probabilities based on form
      const adjustedOdds = {
        ...match,
        homeOdds: match.homeOdds * (1 - (homeForm * 0.1)),
        awayOdds: match.awayOdds * (1 - (awayForm * 0.1))
      };

      const result = this.simulateMatchResult(adjustedOdds);

      // Update form based on result
      if (result.winner === 'Home') {
        homeForm = Math.min(homeForm + 1, 3);
        awayForm = Math.max(awayForm - 1, -3);
      } else if (result.winner === 'Away') {
        homeForm = Math.max(homeForm - 1, -3);
        awayForm = Math.min(awayForm + 1, 3);
      } else {
        homeForm = Math.max(homeForm - 0.5, -3);
        awayForm = Math.max(awayForm - 0.5, -3);
      }

      results.push(result);
    }

    return results;
  }
}
