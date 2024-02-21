import { Column, Entity, OneToMany, OneToOne } from 'typeorm';
import { MainEntity } from '../main/main.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ schema: 'public', name: 'role' })
export class RoleEntity extends MainEntity {
    @Column()
    name: string;

    @OneToMany(() => UserEntity, (user) => user.role)
    user: UserEntity[];
}