import { IsString, IsNotEmpty } from 'class-validator';

export class StartMatchDto {
    @IsString()
    @IsNotEmpty()
    readonly homeTeamName: string;

    @IsString()
    @IsNotEmpty()
    readonly awayTeamName: string;
}
