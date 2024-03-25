import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';
import { staticFilesProviders } from 'src/staticFiles/staticFiles.providers';
import { favoriteProductsProviders } from '../favoriteProducts/favoriteProducts.providers';
import { DatabaseModule } from 'src/database/database.module';
// import { staticFilesProviders } from 'src/staticFiles/staticFiles.providers';

@Module({
  imports: [DatabaseModule],
  exports: [ProductsService],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders, CollectPayloadService, ...staticFilesProviders, ...favoriteProductsProviders],
})
export class ProductsModule {}
