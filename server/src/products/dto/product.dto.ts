import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/categories.model';
import { User } from 'src/users/users.model';
import { Product } from '../products.model';
import { IntendedForEnum, ProductStateEnum } from './create-product.dto';

export class ProductDto {
  @ApiProperty({ example: '1', description: 'Unique id' })
  readonly id: number;

  @ApiProperty({ example: 'Name', description: 'Product name' })
  readonly name: string;

  @ApiProperty({ example: 'Description', description: 'Product description' })
  readonly description: string;

  @ApiProperty({ example: '1', description: 'Product price' })
  readonly price: string;

  @ApiProperty({ example: 'USD', description: 'Product price currency' })
  readonly currency: string;

  @ApiProperty({ example: 'Lori', description: 'Product located province' })
  readonly province: string;

  @ApiProperty({ example: 'Vanadzor', description: 'Product located city' })
  readonly city: string;

  @ApiProperty({ example: 'Street Usanoxakan', description: 'Product located address' })
  readonly address: string;

  @ApiProperty({ example: 'Product info', description: 'Product other information' })
  readonly otherInfo: string;

  @ApiProperty({ enum: ['FOR_SALE', 'FOR_RENT', 'FOR_FREE_GIVING'] })
  intendedFor: IntendedForEnum;

  @ApiProperty({ enum: ['NEW', 'USED', 'NOT_OPERABLE'] })
  productState: ProductStateEnum;

  @ApiProperty({ example: '1', description: 'Product category id' })
  readonly categoryId: number;

  @ApiProperty({ type: Category })
  readonly category: Category;

  @ApiProperty({ example: false, description: 'User archived' })
  readonly userId: boolean;

  @ApiProperty({ type: User })
  readonly user: User;
}

export class GetProductsDto {
  @ApiProperty({ type: [Product] })
  readonly data: Product[];

  @ApiProperty()
  readonly count: number;
}
