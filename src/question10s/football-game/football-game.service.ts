import { Injectable } from '@nestjs/common';
import { FootballGameSingleton } from './football-game-singleton';

@Injectable()
export class FootballGameService {
    startMatch(homeTeamName: string, awayTeamName: string) {
        FootballGameSingleton.getInstance().startMatch(homeTeamName, awayTeamName);
    }

    setHomeTeamScore(score: number) {
        FootballGameSingleton.getInstance().setHomeTeamScore(score);
    }

    setAwayTeamScore(score: number) {
        FootballGameSingleton.getInstance().setAwayTeamScore(score);
    }

    endMatch() {
        FootballGameSingleton.getInstance().endMatch();
    }

    getScore(): string {
        return FootballGameSingleton.getInstance().getScore();
    }
}
