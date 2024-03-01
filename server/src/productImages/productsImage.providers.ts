import { PRODUCT_IMAGE_REPOSITORY } from 'src/shared/constants';
import { ProductImage } from './productsImage.model';

export const productsImageProviders = [
  {
    provide: PRODUCT_IMAGE_REPOSITORY,
    useValue: ProductImage,
  },
];
