import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UsersController } from './users.controller';
import { RolesModule } from 'src/roles/roles.module';
import { DatabaseModule } from 'src/database/database.module';
import { userRolesProviders } from 'src/roles/user-roles.provider';
import { MailerService } from 'src/mailer/mailer.service';
import { CollectPayloadService } from 'src/payloadHelper/collectPayload.service';

@Module({
  imports: [DatabaseModule, RolesModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders, ...userRolesProviders, MailerService, CollectPayloadService],
})
export class UsersModule {}
