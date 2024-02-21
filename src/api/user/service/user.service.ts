import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create.dto';
import { UserEntity } from 'src/entities/user/user.entity';
import { UserRepository } from '../repository/user.repository';
import { RoleService } from 'src/api/role/service/role.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private roleService: RoleService
  ) { }

  async createEntity(createEntityDto: CreateUserDto): Promise<UserEntity> {
    createEntityDto.role = await this.roleService.findOne(createEntityDto.roleId);
    return await this.userRepository.createEntity(createEntityDto);
  }

  async findAllEntities(): Promise<UserEntity[]> {
    return await this.userRepository.findAllEntities();
  }

  async findOneEntity(userId: string): Promise<UserEntity> {
    return await this.userRepository.findOneEntity(userId);
  }
}
