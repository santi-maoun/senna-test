import { Controller, Post, Body } from '@nestjs/common';
import { GreetingsService } from './greetings.service';
import { NameDto } from './dto/name.dto';

@Controller('q1')
export class GreetingsController {
    constructor(
        private readonly greetingsService: GreetingsService,
    ) { }

    @Post()
    async greet(@Body() nameDto: NameDto) {
        return this.greetingsService.greet(nameDto.name);
    }
}
