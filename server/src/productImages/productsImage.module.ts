import { Module } from '@nestjs/common';
import { productsImageProviders } from './productsImage.providers';

@Module({
  exports: [],
  controllers: [],
  providers: [...productsImageProviders],
})
export class ProductsImageModule {}
