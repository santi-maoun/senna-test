import { IsInt, Min } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class TeamScoreDto {
    @IsInt()
    @Min(0)
    @ApiModelProperty()
    readonly score: number;
}
