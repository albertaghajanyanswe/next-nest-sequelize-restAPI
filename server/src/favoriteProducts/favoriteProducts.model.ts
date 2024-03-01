import { User } from '../users/users.model';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { UserFavoriteProducts } from './user-favoriteProducts.model';
import { IntendedForEnum, ProductStateEnum } from 'src/products/dto/create-product.dto';
import { Product } from 'src/products/products.model';

interface FavoriteProductCreationAttr {
  storedProductName: string;
  storedProductDescription: string;
}

@Table({ tableName: 'favorite_products' })
export class FavoriteProduct extends Model<FavoriteProduct, FavoriteProductCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'Stored Product id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  storedProductId: number;

  @ApiProperty({ example: 'Notebook Dell', description: 'Enter product name' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  storedProductName: string;

  @ApiProperty({ example: 'Notebook', description: 'Notebook description' })
  @Column({ type: DataType.TEXT, allowNull: true })
  storedProductDescription: string;

  @ApiProperty({ example: '500', description: 'Notebook price' })
  @Column({ type: DataType.STRING, allowNull: false })
  storedProductPrice: string;

  @ApiProperty({ example: 'USD', description: 'Notebook price currency' })
  @Column({ type: DataType.STRING, allowNull: false })
  storedProductCurrency: string;

  @ApiProperty({ example: 'Lori', description: 'Notebook located province' })
  @Column({ type: DataType.STRING, allowNull: false })
  storedProductProvince: string;

  @ApiProperty({ example: 'Vanadzor', description: 'Notebook located city' })
  @Column({ type: DataType.STRING, allowNull: false })
  storedProductCity: string;

  @ApiProperty({ example: 'Usanoxakan 5', description: 'Notebook located exact address' })
  @Column({ type: DataType.STRING, allowNull: false })
  storedProductAddress: string;

  @ApiProperty({ example: 'New notebook', description: 'Notebook other information' })
  @Column({ type: DataType.TEXT, allowNull: true })
  storedProductOtherInfo: string;

  @ApiProperty({ enum: ['FOR_SALE', 'FOR_RENT', 'FOR_FREE_GIVING'] })
  @Column({
    type: DataType.ENUM('FOR_SALE', 'FOR_RENT', 'FOR_FREE_GIVING'),
    allowNull: false,
  })
  storedProductIntendedFor: IntendedForEnum;

  @ApiProperty({ enum: ['NEW', 'USED', 'NOT_OPERABLE'] })
  @Column({
    type: DataType.ENUM('NEW', 'USED', 'NOT_OPERABLE'),
    allowNull: false,
  })
  storedProductState: ProductStateEnum;

  @ApiProperty({ example: '1', description: 'Stored Category id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  storedProductCategoryId: number;

  @ApiProperty({ example: '1', description: 'Stored User id' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  storedProductUserId: number;

  @BelongsToMany(() => User, () => UserFavoriteProducts)
  users: User[];

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
