import { ApiProperty } from '@nestjs/swagger';
import { IntendedForEnum, ProductStateEnum } from 'src/products/dto/create-product.dto';

export class FavoriteProductDto {
  @ApiProperty({ example: '1', description: 'Unique id' })
  readonly id: number;

  @ApiProperty({ example: '1', description: 'Stored Product id' })
  readonly storedProductId: number;

  @ApiProperty({ example: 'Name', description: 'Stored product name' })
  readonly storedProductName: string;

  @ApiProperty({ example: 'Description', description: 'Stored product description' })
  readonly storedProductDescription: string;

  @ApiProperty({ example: '1', description: 'Stored product price' })
  readonly storedProductPrice: string;

  @ApiProperty({ example: 'USD', description: 'Stored product price currency' })
  readonly storedProductCurrency: string;

  @ApiProperty({ example: 'Lori', description: 'Stored product located province' })
  readonly storedProductProvince: string;

  @ApiProperty({ example: 'Vanadzor', description: 'Stored product located city' })
  readonly storedProductCity: string;

  @ApiProperty({ example: 'Street Usanoxakan', description: 'Stored product located address' })
  readonly storedProductAddress: string;

  @ApiProperty({ example: 'Product info', description: 'Stored product other information' })
  readonly storedProductOtherInfo: string;

  @ApiProperty({ enum: ['FOR_SALE', 'FOR_RENT', 'FOR_FREE_GIVING'] })
  storedProductIntendedFor: IntendedForEnum;

  @ApiProperty({ enum: ['NEW', 'USED', 'NOT_OPERABLE'] })
  storedProductState: ProductStateEnum;

  @ApiProperty({ example: '1', description: 'Stored product category id' })
  readonly storedProductCategoryId: number;

  @ApiProperty({ example: '1', description: 'Stored Product user id' })
  readonly storedProductUserId: number;
}

export class GetFavoriteProductsDto {
  @ApiProperty({ type: [FavoriteProductDto] })
  readonly data: FavoriteProductDto[];

  @ApiProperty()
  readonly count: number;
}

export class DeleteDto {
  readonly message: string;
  readonly success: boolean;
  readonly error?: string;
}
