import { Module } from '@nestjs/common';
import { staticFilesProviders } from './staticFiles.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  exports: [],
  controllers: [],
  providers: [...staticFilesProviders],
})
export class StaticFilesModule {}
