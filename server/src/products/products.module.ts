import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProviders } from './products.providers';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';

@Module({
  exports: [ProductsService],
  controllers: [ProductsController],
  providers: [ProductsService, ...productsProviders, CollectPayloadService],
})
export class ProductsModule {}
