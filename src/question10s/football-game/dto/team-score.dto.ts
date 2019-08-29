import { IsInt, Min } from 'class-validator';

export class TeamScoreDto {
    @IsInt()
    @Min(0)
    readonly score: number;
}
