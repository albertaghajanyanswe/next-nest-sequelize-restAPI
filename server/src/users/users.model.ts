import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { FavoriteProduct } from 'src/favoriteProducts/favoriteProducts.model';
import { UserFavoriteProducts } from 'src/favoriteProducts/user-favoriteProducts.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttr {
  email: string;
  password: string;
  nickName: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  activationLink: string;
  isActive: boolean;
  roles?: number;
}

const PASSWORD_EXPIRE_DAYS = 90;

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Nick name', description: 'User nick name' })
  @Column({ type: DataType.STRING, allowNull: true })
  nickName: string;

  @ApiProperty({ example: 'First name', description: 'User first name' })
  @Column({ type: DataType.STRING, allowNull: true })
  firstName: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  @Column({ type: DataType.STRING, allowNull: true })
  lastName: string;

  @ApiProperty({
    example: 'test@yopmail.com',
    description: 'User email address',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  email: string;

  @ApiProperty({ example: '11111', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '2023-09-19 19:31:35.669+04', description: 'User password expire date' })
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: new Date(Date.now() + PASSWORD_EXPIRE_DAYS * 24 * 60 * 60 * 1000),
  })
  passwordExpireDate: string;

  @ApiProperty({ example: '2023-09-19 19:31:35.669+04', description: 'User last login date' })
  @Column({ type: DataType.DATE, allowNull: true })
  lastLogin: string;

  @ApiProperty({ example: 'Last name', description: 'User last name' })
  @Column({ type: DataType.STRING, unique: false, allowNull: true })
  phone: string;

  @ApiProperty({ example: '', description: 'User activation link' })
  @Column({ type: DataType.STRING, unique: true, allowNull: true })
  activationLink: string;

  @ApiProperty({ example: true, description: 'User active state' })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  isActive: boolean;

  @ApiProperty({ example: false, description: 'User archived' })
  @Column({ type: DataType.STRING, allowNull: false, defaultValue: false })
  archived: boolean;

  @ApiProperty({ example: 1, description: 'Corresponding role id' })
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @ApiProperty({ example: '', description: 'User image' })
  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @ApiProperty({ example: '', description: 'Firebase subscription' })
  @Column({ type: DataType.STRING, allowNull: true })
  firebaseSubscription: string;

  @ApiProperty({ example: '', description: 'Firebase token' })
  @Column({ type: DataType.STRING, allowNull: true })
  firebaseToken: string;

  @ApiProperty({ example: '', description: 'Device type' })
  @Column({ type: DataType.STRING, allowNull: true })
  deviceType: string;

  @ApiProperty({ example: 1, description: 'Corresponding favoriteProduct id' })
  @BelongsToMany(() => FavoriteProduct, () => UserFavoriteProducts)
  favoriteProducts: FavoriteProduct[];
}
