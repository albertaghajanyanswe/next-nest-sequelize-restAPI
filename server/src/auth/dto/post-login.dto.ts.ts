import { ApiProperty } from '@nestjs/swagger';

export class PostLoginDto {
  @ApiProperty({
    example: 'test@yopmail.com',
    description: 'User email address',
  })
  readonly email: string;
  @ApiProperty({ example: '11111', description: 'User password' })
  readonly password: string;
}

export class PostLoginGuestDto {
  @ApiProperty({
    example: 'test',
    description: 'User nickname',
  })
  readonly nickName: string;
  @ApiProperty({ example: '11111', description: 'User password' })
  readonly password: string;
}
