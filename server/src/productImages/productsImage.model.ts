import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Product } from 'src/products/products.model';

interface ProductImageCreationAttr {
  name: string;
  productId?: number;
}

@Table({ tableName: 'product_image' })
export class ProductImage extends Model<ProductImage, ProductImageCreationAttr> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Image name', description: 'Image name desc' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
