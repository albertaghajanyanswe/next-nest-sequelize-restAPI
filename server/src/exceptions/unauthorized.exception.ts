import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomUnauthorizedException extends HttpException {
  constructor() {
    super('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}
