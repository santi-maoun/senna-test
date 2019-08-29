import { MatchAlreadyStartException } from './exceptions/match-already-start.exception';
import { MatchNotPlayingException } from './exceptions/match-not-playing.exception';
import { MatchAlreadyEndException } from './exceptions/match-already-end.exception';
import { ScoreUnavailableException } from './exceptions/score-unavailable.exception';

export class FootballGameSingleton {
    private static instance: FootballGameSingleton;

    private isMatchPlay: boolean = false;
    private homeTeamName: string;
    private homeTeamScore: number;
    private awayTeamName: string;
    private awayTeamScore: number;

    private constructor() { }

    static getInstance() {
        if (!FootballGameSingleton.instance) {
            FootballGameSingleton.instance = new FootballGameSingleton();
        }

        return FootballGameSingleton.instance;
    }

    getIsMatchPlay(): boolean {
        return this.isMatchPlay;
    }

    startMatch(homeTeamName: string, awayTeamName: string) {
        if (this.isMatchPlay) {
            throw new MatchAlreadyStartException();
        }

        this.homeTeamName = homeTeamName;
        this.homeTeamScore = 0;

        this.awayTeamName = awayTeamName;
        this.awayTeamScore = 0;

        this.isMatchPlay = true;
    }

    setHomeTeamScore(score: number) {
        if (!this.isMatchPlay) {
            throw new MatchNotPlayingException();
        }

        this.homeTeamScore = score;
    }

    setAwayTeamScore(score: number) {
        if (!this.isMatchPlay) {
            throw new MatchNotPlayingException();
        }

        this.awayTeamScore = score;
    }

    endMatch() {
        if (!this.isMatchPlay) {
            throw new MatchAlreadyEndException();
        }

        this.isMatchPlay = false;
    }

    getScore(): string {
        if (this.homeTeamName && this.awayTeamName) {
            return `${this.homeTeamName}: ${this.homeTeamScore} --- ${this.awayTeamName}: ${this.awayTeamScore}`;
        } else {
            throw new ScoreUnavailableException();
        }
    }
}
