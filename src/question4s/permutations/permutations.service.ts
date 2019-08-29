import { Injectable } from '@nestjs/common';

@Injectable()
export class PermutationsService {
    static results: string[] = [];

    run(winningNumber: string): string[] {
        const element = winningNumber.split('');

        this.combination(element, 0, element.length - 1);

        return PermutationsService.results;
    }

    combination(str: string[], start: number, end: number) {
        if (start === end) {
            PermutationsService.results.push(str.join(''));
        } else {
            for (let i = start; i <= end; i++) {
                str = this.swap(str, start, i);
                this.combination(str, start + 1, end);
                str = this.swap(str, start, i);
            }
        }
    }

    swap(str: string[], i: number, j: number) {
        const chars = str;

        const temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;

        return chars;
    }
}
