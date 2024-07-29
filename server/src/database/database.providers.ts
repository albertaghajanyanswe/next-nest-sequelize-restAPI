import { Sequelize } from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { FavoriteProduct } from 'src/favoriteProducts/favoriteProducts.model';
import { UserFavoriteProducts } from 'src/favoriteProducts/user-favoriteProducts.model';
import { ProductImage } from 'src/productImages/productsImage.model';
import { Product } from 'src/products/products.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { DEVELOPMENT, PRODUCTION, SEQUELIZE, TEST } from 'src/shared/constants';
import { User } from 'src/users/users.model';
import { databaseConfig } from './database.config';
import { StaticFiles } from 'src/staticFiles/staticFiles.model';

export const databaseProvidersObject = {
  provide: SEQUELIZE,
  useFactory: async (): Promise<Sequelize> => {
    let config;
    switch (process.env.NODE_ENV) {
      case DEVELOPMENT:
        config = databaseConfig.development;
        break;
      case TEST:
        config = databaseConfig.test;
        break;
      case PRODUCTION:
        config = databaseConfig.production;
        break;
      default:
        config = databaseConfig.development;
    }
    const sequelize = new Sequelize(config);
    sequelize.addModels([
      User,
      Role,
      UserRoles,
      Category,
      Product,
      ProductImage,
      FavoriteProduct,
      UserFavoriteProducts,
      StaticFiles,
    ]);
    await sequelize.sync();
    return sequelize;
  },
};

export const databaseProviders = [databaseProvidersObject];
