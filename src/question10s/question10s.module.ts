import { Module } from '@nestjs/common';
import { FootballGameController } from './football-game/football-game.controller';
import { FootballGameService } from './football-game/football-game.service';

@Module({
  controllers: [FootballGameController],
  providers: [FootballGameService],
})
export class Question10sModule {}
