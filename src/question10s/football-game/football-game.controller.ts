import { Controller, Post, Body, Patch, Get, Header } from '@nestjs/common';
import { FootballGameService } from './football-game.service';
import { StartMatchDto } from './dto/start-match.dto';
import { TeamScoreDto } from './dto/team-score.dto';

@Controller('q10')
export class FootballGameController {
    constructor(
        private readonly footballGameService: FootballGameService,
    ) { }

    @Post('/match')
    async startMatch(@Body() startMatchDto: StartMatchDto) {
        this.footballGameService.startMatch(startMatchDto.homeTeamName, startMatchDto.awayTeamName);

        return 'Match start';
    }

    @Patch('/home')
    async setHomeTeamScore(@Body() teamScoreDto: TeamScoreDto) {
        this.footballGameService.setHomeTeamScore(teamScoreDto.score);

        return `Home score set to ${teamScoreDto.score}`;
    }

    @Patch('/away')
    async setAwayTeamScore(@Body() teamScoreDto: TeamScoreDto) {
        this.footballGameService.setAwayTeamScore(teamScoreDto.score);

        return `Away score set to ${teamScoreDto.score}`;
    }

    @Post('/end')
    async endMatch() {
        this.footballGameService.endMatch();

        return 'Match end';
    }

    @Get('/score')
    @Header('Cache-Control', 'no-cache, no-store')
    async getScore() {
        return this.footballGameService.getScore();
    }
}
