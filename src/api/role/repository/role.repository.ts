import { Inject, Injectable } from '@nestjs/common';
import { PostgresConstant } from 'src/common/constants/postgres.constant';
import { RoleEntity } from 'src/entities/role/role.entity';
import { DataSource, Repository, UpdateResult } from 'typeorm';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';

@Injectable()
export class RoleRepository
    extends Repository<RoleEntity> {
    constructor(
        @Inject(PostgresConstant) private db: DataSource,
    ) {
        super(RoleEntity, db.createEntityManager());
    }

    async createEntity(createEntityDto: CreateRoleDto): Promise<RoleEntity> {
        return await this.save(this.create(createEntityDto));
    }

    async updateEntity(
        id: number,
        updateEntityDto: UpdateRoleDto,
    ): Promise<UpdateResult> {
        return await this.update(id, updateEntityDto);
    }

    async findAllEntities(): Promise<RoleEntity[]> {
        return await this.createQueryBuilder('role').getMany();
    }

    async findOneEntity(roleId: number): Promise<RoleEntity> {
        return await this.createQueryBuilder('role')
            .where('role.id = :roleId', {
                roleId,
            })
            .getOne();
    }
}