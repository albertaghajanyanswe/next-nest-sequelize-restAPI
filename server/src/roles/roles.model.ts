import { User } from './../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { UserRoles } from './user-roles.model';
import { UserRoleEnum } from 'src/users/dto/create-role.dto';

interface RoleCreationAttr {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ enum: ['ADMIN', 'USER', 'GUEST']})
  @Column({
    type: DataType.ENUM('ADMIN', 'USER', 'GUEST'),
    unique: true,
    allowNull: false,
  })
  value: UserRoleEnum;

  @ApiProperty({ example: 'Guest user', description: 'Role description' })
  @Column({ type: DataType.STRING, allowNull: true })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
