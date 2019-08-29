import { Controller, Post, Body } from '@nestjs/common';
import { LotteriesService } from './lotteries.service';
import { LotteryDto } from './dto/lottery.dto';

@Controller('q3')
export class LotteriesController {
    constructor(
        private readonly lotteriesService: LotteriesService,
    ) { }

    @Post()
    async run(@Body() lotteryDto: LotteryDto) {
        return this.lotteriesService.run(lotteryDto.winningNumber);
    }
}
