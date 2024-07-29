import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { FavoriteProduct } from 'src/favoriteProducts/favoriteProducts.model';
import { ProductImage } from 'src/productImages/productsImage.model';
import { User } from 'src/users/users.model';
import { IntendedForEnum, ProductStateEnum } from './dto/create-product.dto';
import { StaticFiles } from '../staticFiles/staticFiles.model';

interface ProductCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Notebook Dell', description: 'Enter product name' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'Notebook', description: 'Notebook description' })
  @Column({ type: DataType.TEXT, allowNull: true })
  description: string;

  @ApiProperty({ example: '500', description: 'Notebook price' })
  @Column({ type: DataType.STRING, allowNull: false })
  price: string;

  @ApiProperty({ example: 'USD', description: 'Notebook price currency' })
  @Column({ type: DataType.STRING, allowNull: false })
  currency: string;

  @ApiProperty({ example: 'Lori', description: 'Notebook located province' })
  @Column({ type: DataType.STRING, allowNull: false })
  province: string;

  @ApiProperty({ example: 'Vanadzor', description: 'Notebook located city' })
  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @ApiProperty({ example: 'Usanoxakan 5', description: 'Notebook located exact address' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({ example: 'New notebook', description: 'Notebook other information' })
  @Column({ type: DataType.TEXT, allowNull: true })
  otherInfo: string;

  @ApiProperty({ enum: ['FOR_SALE', 'FOR_RENT', 'FOR_FREE_GIVING'] })
  @Column({
    type: DataType.ENUM('FOR_SALE', 'FOR_RENT', 'FOR_FREE_GIVING'),
    allowNull: false,
  })
  intendedFor: IntendedForEnum;

  @ApiProperty({ enum: ['NEW', 'USED', 'NOT_OPERABLE'] })
  @Column({
    type: DataType.ENUM('NEW', 'USED', 'NOT_OPERABLE'),
    allowNull: false,
  })
  productState: ProductStateEnum;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => ProductImage, {
    foreignKey: {
      name: 'productId',
      field: 'productId',
    },
    onDelete: 'CASCADE',
  })
  // @HasMany(() => ProductImage, 'productId')
  productImage: ProductImage[];

  @HasMany(() => FavoriteProduct, {
    foreignKey: {
      name: 'productId',
      field: 'productId',
    },
    onDelete: 'CASCADE',
  })
  // @HasMany(() => ProductImage, 'productId')
  favoriteProduct: FavoriteProduct[];

  @HasMany(() => StaticFiles, {
    foreignKey: {
      name: 'productId',
      field: 'productId',
    },
    onDelete: 'CASCADE',
  })
  staticFiles: StaticFiles[];
}
