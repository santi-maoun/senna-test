import { IsString, IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class NameDto {
    @IsString()
    @IsNotEmpty()
    @ApiModelProperty()
    readonly name: string;
}
