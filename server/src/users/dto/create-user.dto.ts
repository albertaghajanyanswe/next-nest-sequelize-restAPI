import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Nick name', description: 'User nick name' })
  readonly nickName: string;

  @ApiProperty({ example: 'First name', description: 'User first name' })
  readonly firstName: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  readonly lastName: string;

  @ApiProperty({
    example: 'test@yopmail.com',
    description: 'User email address',
  })
  readonly email: string;

  @ApiProperty({ example: '11111', description: 'User password' })
  readonly password: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  readonly phone: string;

  @ApiProperty({ example: '', description: 'User image' })
  readonly image: string;

  @ApiProperty({ example: '', description: 'User activation link' })
  readonly activationLink: string;

  @ApiProperty({ example: true, description: 'User active state' })
  readonly isActive: boolean;
}

export class CreateGuestUserDto {
  @ApiProperty({ example: 'Nick name', description: 'User nick name' })
  readonly nickName: string;

  @ApiProperty({ example: '11111', description: 'User password' })
  readonly password: string;
}

export class UpdateUserDto {
  @ApiProperty({ example: 'First name', description: 'User first name' })
  readonly firstName: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  readonly lastName: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  readonly phone: string;

  @ApiProperty({ example: '', description: 'User image' })
  readonly image: string;
}
