import { User } from '../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { FavoriteProduct } from './favoriteProducts.model';

@Table({ tableName: 'user_favorite_products' })
export class UserFavoriteProducts extends Model<UserFavoriteProducts> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => FavoriteProduct)
  @Column({ type: DataType.INTEGER })
  favoriteProductId: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: string;
}
