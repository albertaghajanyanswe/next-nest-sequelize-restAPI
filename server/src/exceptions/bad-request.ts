import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomBadRequest extends HttpException {
  constructor() {
    super('Bad request', HttpStatus.BAD_REQUEST);
  }
}
