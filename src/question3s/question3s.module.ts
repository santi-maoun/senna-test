import { Module } from '@nestjs/common';
import { LotteriesController } from './lotteries/lotteries.controller';
import { LotteriesService } from './lotteries/lotteries.service';

@Module({
    controllers: [LotteriesController],
    providers: [LotteriesService],
})
export class Question3sModule { }
