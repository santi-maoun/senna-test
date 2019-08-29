import { HttpException, HttpStatus } from '@nestjs/common';

export class UnsupportFileException extends HttpException {
  constructor(fileName: string, reason: string) {
    super({
      statusCode: HttpStatus.BAD_REQUEST,
      error: 'Unsupport File',
      message: `${fileName} is not support. ${reason}`,
    }, HttpStatus.BAD_REQUEST);
  }
}
