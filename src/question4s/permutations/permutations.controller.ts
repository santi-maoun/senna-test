import { Controller, Post, Body } from '@nestjs/common';
import { PermutationsService } from './permutations.service';
import { LotteryDto } from '../../question3s/lotteries/dto/lottery.dto';

@Controller('q4')
export class PermutationsController {
    constructor(
        private readonly permutationsService: PermutationsService,
    ) { }

    @Post()
    async run(@Body() lotteryDto: LotteryDto) {
        return this.permutationsService.run(lotteryDto.winningNumber);
    }
}
