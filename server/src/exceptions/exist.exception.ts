import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomAlreadyExistException extends HttpException {
  constructor(propertyName: string) {
    super(`${propertyName} already exists`, HttpStatus.BAD_REQUEST);
  }
}
