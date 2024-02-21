import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { MainEntity } from '../main/main.entity';
import { WalletEntity } from '../wallet/wallet.entity';
import { RoleEntity } from '../role/role.entity';
import { InstallmentEntity } from '../installment/installment.entity';

@Entity({ schema: 'public', name: 'user' })
export class UserEntity extends MainEntity {
    @Column({})
    first_name: string;

    @Column({})
    last_name: string;

    @Column({ nullable: true })
    name: string;

    @Column({})
    mobile: string;

    @Column({ nullable: true })
    username: string;

    @Column({ nullable: true })
    password: string;

    @OneToOne(() => WalletEntity)
    @JoinColumn()
    wallet: WalletEntity;

    @OneToOne(() => RoleEntity)
    @JoinColumn()
    role: RoleEntity;

    @OneToMany(() => InstallmentEntity, (installment) => installment.user)
    installment: InstallmentEntity[];

    @BeforeInsert()
    async createName() {
        this.name = this.first_name + '' + this.last_name;
    }
}