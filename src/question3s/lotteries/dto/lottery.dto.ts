import { IsNumberString, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LotteryDto {
    @IsNumberString()
    @Length(6, 6)
    @ApiModelProperty()
    readonly winningNumber: string;
}
