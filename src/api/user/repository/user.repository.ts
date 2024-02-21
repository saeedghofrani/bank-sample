import { Inject, Injectable } from '@nestjs/common';
import { PostgresConstant } from 'src/common/constants/postgres.constant';
import { UserEntity } from 'src/entities/user/user.entity';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from '../dto/create.dto';

@Injectable()
export class UserRepository
  extends Repository<UserEntity> {
  constructor(
    @Inject(PostgresConstant) private db: DataSource,
  ) {
    super(UserEntity, db.createEntityManager());
  }

  async createEntity(createEntityDto: CreateUserDto): Promise<UserEntity> {
    return await this.save(this.create(createEntityDto));
  }

  async updateEntity(
    id: string,
    updateEntityDto: never,
  ): Promise<UpdateResult> {
    return await this.update(id, updateEntityDto);
  }

  async findAllEntities(): Promise<UserEntity[]> {
    return await this.createQueryBuilder('user').getMany();
  }

  async findOneEntity(userId: string): Promise<UserEntity> {
    return await this.createQueryBuilder('user')
      .where('user.id = :userId', {
        userId,
      })
      .getOne();
  }
}