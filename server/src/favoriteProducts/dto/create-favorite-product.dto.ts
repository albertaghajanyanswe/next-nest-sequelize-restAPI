import { IntendedForEnum, ProductStateEnum } from 'src/products/dto/create-product.dto';

export class CreateFavoriteProductDto {
  readonly storedProductName: string;
  readonly storedProductDescription: string;
  readonly storedProductPrice: string;
  readonly storedProductCurrency: string;
  readonly storedProductProvince: string;
  readonly storedProductCity: string;
  readonly storedProductAddress: string;
  readonly storedProductOtherInfo: string;
  readonly storedProductIntendedFor: IntendedForEnum;
  readonly storedProductState: ProductStateEnum;
  readonly storedProductCategoryId: number;
  readonly storedProductUserId: number;
  readonly storedProductId: number;
}

export class CreateFavoriteProductByIdDto {
  readonly productId: string;
  readonly userId: string;
}
