import { USER_FAVORITE_PRODUCTS_REPOSITORY } from 'src/shared/constants';
import { UserFavoriteProducts } from './user-favoriteProducts.model';

export const userFavoriteProductsProviders = [
  {
    provide: USER_FAVORITE_PRODUCTS_REPOSITORY,
    useValue: UserFavoriteProducts,
  },
];
