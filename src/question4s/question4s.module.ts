import { Module } from '@nestjs/common';
import { PermutationsController } from './permutations/permutations.controller';
import { PermutationsService } from './permutations/permutations.service';

@Module({
    controllers: [PermutationsController],
    providers: [PermutationsService],
})
export class Question4sModule { }
