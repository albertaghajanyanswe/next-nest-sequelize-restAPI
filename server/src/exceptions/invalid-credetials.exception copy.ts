import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomInvalidCredentialsException extends HttpException {
  constructor() {
    super('Invalid credetials', HttpStatus.UNAUTHORIZED);
  }
}
