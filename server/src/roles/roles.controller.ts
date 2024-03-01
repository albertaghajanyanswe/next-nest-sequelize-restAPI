import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from 'src/users/dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@ApiBearerAuth()
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Create new role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    return this.roleService.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Get role by value' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRoleByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value);
  }
}
