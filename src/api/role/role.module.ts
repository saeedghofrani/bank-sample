import { Module } from '@nestjs/common';
import { RoleService } from './service/role.service';
import { RoleController } from './controller/role.controller';
import { RoleRepository } from './repository/role.repository';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
  exports: [RoleService],
})
export class RoleModule {}
