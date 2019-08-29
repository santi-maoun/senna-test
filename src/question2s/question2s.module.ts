import { Module } from '@nestjs/common';
import { ReadFilesController } from './read-files/read-files.controller';
import { ReadFilesService } from './read-files/read-files.service';

@Module({
    controllers: [ReadFilesController],
    providers: [ReadFilesService],
})
export class Question2sModule { }
