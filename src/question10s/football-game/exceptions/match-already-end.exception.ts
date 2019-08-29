import { HttpException, HttpStatus } from '@nestjs/common';

export class MatchAlreadyEndException extends HttpException {
  constructor() {
    super({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Match Already End',
      message: 'The match has already end.',
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
