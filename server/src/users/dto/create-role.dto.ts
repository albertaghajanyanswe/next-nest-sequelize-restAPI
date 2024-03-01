import { ApiProperty } from '@nestjs/swagger';

export enum UserRoleEnum {
  Guest = 'GUEST',
  User = 'USER',
  Admin = 'ADMIN',
}

export class CreateRoleDto {
  readonly value: UserRoleEnum;
  readonly description: string;
}
