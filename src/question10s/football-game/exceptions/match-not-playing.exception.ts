import { HttpException, HttpStatus } from '@nestjs/common';

export class MatchNotPlayingException extends HttpException {
  constructor() {
    super({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Match Not Playing',
      message: 'The match is not playing.',
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
