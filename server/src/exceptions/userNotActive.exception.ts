import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomUserNotActiveException extends HttpException {
  constructor() {
    super('Please check your email and activate your account via link.', HttpStatus.BAD_REQUEST);
  }
}
