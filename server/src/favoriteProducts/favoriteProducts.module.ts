import { Module } from '@nestjs/common';
import { FavoriteProductsService } from './favoriteProducts.service';
import { FavoriteProductsController } from './favoriteProducts.controller';
import { favoriteProductsProviders } from './favoriteProducts.providers';
import { ProductsModule } from 'src/products/products.module';
import { userFavoriteProductsProviders } from './user-favoriteProducts.provider';
import { UsersModule } from 'src/users/users.module';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule, ProductsModule, UsersModule],
  exports: [FavoriteProductsService],
  controllers: [FavoriteProductsController],
  providers: [
    FavoriteProductsService,
    ...favoriteProductsProviders,
    ...userFavoriteProductsProviders,
    CollectPayloadService,
  ],
})
export class FavoriteProductsModule {}
