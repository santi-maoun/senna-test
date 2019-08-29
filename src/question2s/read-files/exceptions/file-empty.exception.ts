import { HttpException, HttpStatus } from '@nestjs/common';

export class FileEmptyException extends HttpException {
  constructor() {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'File Empty',
      message: 'The file is empty',
    }, HttpStatus.BAD_REQUEST);
  }
}
