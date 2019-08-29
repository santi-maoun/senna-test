import { Injectable } from '@nestjs/common';

@Injectable()
export class LotteriesService {
    run(winningNumber: string): string[] {
        const lastDigit = winningNumber.substring(4);

        const results: string[] = [];
        for (let i = 0; i < 10000; i++) {
            results.push(i.toString().padStart(4, '0') + lastDigit);
        }

        return results;
    }
}
