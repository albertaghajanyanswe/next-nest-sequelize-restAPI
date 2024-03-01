import { User } from './../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles' })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  roleId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: string;
}
