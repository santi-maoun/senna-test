import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ReadFilesService } from './read-files.service';
import { UnsupportFileException } from './exceptions/unsupport-file.exception';

@Controller('q2')
export class ReadFilesController {
    constructor(
        private readonly readFilesService: ReadFilesService,
    ) { }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        fileFilter: (req: any, file: any, cb: any) => {
            if (file.mimetype.match(/\/(csv)$/)) {
                cb(null, true);
            } else {
                cb(new UnsupportFileException(file.originalname, 'File uploads support only CSV file.'), false);
            }
        },
    }))
    public uploadImage(@UploadedFile() file: any) {
        return this.readFilesService.read(file);
    }
}
