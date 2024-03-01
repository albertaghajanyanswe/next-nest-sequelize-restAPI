import { FAVORITE_PRODUCTS_REPOSITORY } from 'src/shared/constants';
import { FavoriteProduct } from './favoriteProducts.model';

export const favoriteProductsProviders = [
  {
    provide: FAVORITE_PRODUCTS_REPOSITORY,
    useValue: FavoriteProduct,
  },
];
