import { HttpException, HttpStatus } from '@nestjs/common';

export class MatchAlreadyStartException extends HttpException {
  constructor() {
    super({
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      error: 'Match Already Start',
      message: 'The match has already start.',
    }, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
