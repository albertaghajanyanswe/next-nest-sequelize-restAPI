import { Module } from '@nestjs/common';
import { staticFilesProviders } from './staticFiles.providers';

@Module({
  exports: [],
  controllers: [],
  providers: [...staticFilesProviders],
})
export class StaticFilesModule {}
