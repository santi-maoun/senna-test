import { IsNumberString, Length } from 'class-validator';

export class LotteryDto {
    @IsNumberString()
    @Length(6, 6)
    readonly winningNumber: string;
}
