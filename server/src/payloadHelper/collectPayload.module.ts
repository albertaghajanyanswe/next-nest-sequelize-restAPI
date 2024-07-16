import { Module } from "@nestjs/common";
import { CollectPayloadService } from "./collectPayload.service";
import { DatabaseModule } from "src/database/database.module";


@Module({
  imports: [DatabaseModule],
  exports: [CollectPayloadService],
  controllers: [],
  providers: [CollectPayloadService],
})
export class CollectPayloadModule {}
