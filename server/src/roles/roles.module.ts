import { UserRoles } from './user-roles.model';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { User } from 'src/users/users.model';
import { rolesProviders } from './roles.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  // imports: [DatabaseModule],
  exports: [RolesService],
  controllers: [RolesController],
  providers: [RolesService, ...rolesProviders],
})
export class RolesModule {}
