import { Injectable } from '@nestjs/common';

@Injectable()
export class GreetingsService {
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}
