import { PRODUCT_REPOSITORY } from 'src/shared/constants';
import { Product } from './products.model';

export const productsProviders = [
  {
    provide: PRODUCT_REPOSITORY,
    useValue: Product,
  },
];
