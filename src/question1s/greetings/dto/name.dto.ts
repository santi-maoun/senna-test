import { IsString, IsNotEmpty } from 'class-validator';

export class NameDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}
