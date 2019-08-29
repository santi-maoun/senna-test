import { IsString, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class StartMatchDto {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly homeTeamName: string;

    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly awayTeamName: string;
}
