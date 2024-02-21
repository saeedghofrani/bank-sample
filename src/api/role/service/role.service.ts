import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { RoleRepository } from '../repository/role.repository';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository) { }

  async create(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.createEntity(createRoleDto);
  }

  async findAll() {
    return await this.roleRepository.findAllEntities();
  }

  async findOne(id: number) {
    return await this.roleRepository.findOneEntity(id);
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    return await this.roleRepository.updateEntity(id, updateRoleDto)
  }
}