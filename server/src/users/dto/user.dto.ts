import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.model';
import { User } from '../users.model';

export class UserDto {
  @ApiProperty({ example: '1', description: 'Unique id' })
  readonly id: number;

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

  @ApiProperty({ example: '2023-09-19 19:31:35.669+04', description: 'User password expire date' })
  readonly passwordExpireDate: string;

  @ApiProperty({ example: '2023-09-19 19:31:35.669+04', description: 'User last login date' })
  readonly lastLogin: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  readonly phone: string;

  @ApiProperty({ example: '', description: 'User activation link' })
  readonly activationLink: string;

  @ApiProperty({ example: true, description: 'User active state' })
  readonly isActive: boolean;

  @ApiProperty({ example: false, description: 'User archived' })
  readonly archived: boolean;

  @ApiProperty({ example: '', description: 'User image' })
  readonly image: string;

  @ApiProperty({ example: '', description: 'Firebase subscription' })
  readonly firebaseSubscription: string;

  @ApiProperty({ example: '', description: 'Firebase token' })
  readonly firebaseToken: string;

  @ApiProperty({ example: '', description: 'Device type' })
  readonly deviceType: string;

  @ApiProperty({ type: [Role] })
  readonly roles: Role[];
}

export class GetUsersDto {
  @ApiProperty({ type: [User] })
  readonly data: User[];

  @ApiProperty()
  readonly count: number;
}
