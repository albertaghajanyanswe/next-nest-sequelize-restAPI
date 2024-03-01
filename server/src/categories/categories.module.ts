import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { categoriesProviders } from './categories.providers';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';

@Module({
  exports: [CategoriesService],
  controllers: [CategoriesController],
  providers: [CategoriesService, ...categoriesProviders, CollectPayloadService],

})
export class CategoriesModule {}
