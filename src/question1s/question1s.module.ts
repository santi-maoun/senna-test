import { Module } from '@nestjs/common';
import { GreetingsController } from './greetings/greetings.controller';
import { GreetingsService } from './greetings/greetings.service';

@Module({
    controllers: [GreetingsController],
    providers: [GreetingsService],
})
export class Question1sModule { }
