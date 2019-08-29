import { HttpException, HttpStatus } from '@nestjs/common';

export class ScoreUnavailableException extends HttpException {
  constructor() {
    super({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Score Unavailable',
      message: 'Score is unavailable. The match has not been started.',
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
