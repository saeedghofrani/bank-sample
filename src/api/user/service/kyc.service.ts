import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repositories/kyc.repository';
import { UserEntity } from 'src/entities/user/user.entity';

@Injectable()
export class UserService {
  constructor(
    private kycRepository: UserRepository,
  ) { }

  async createEntity(createEntityDto: CreateUserDto): Promise<UserEntity> {
    return await this.kycRepository.createEntity(createEntityDto);
  }

  async findAllEntities(): Promise<UserEntity[]> {
    return await this.kycRepository.findAllEntities();
  }

  async findOneEntity(kycId: string): Promise<UserEntity> {
    return await this.kycRepository.findOneEntity(kycId);
  }
}
