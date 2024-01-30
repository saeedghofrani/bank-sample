import { Column, Entity, OneToOne } from 'typeorm';
import { MainEntity } from '../main/main.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ schema: 'public', name: 'wallet' })
export class WalletEntity extends MainEntity {
    @Column({
        default: 5,
    })
    share: number;

    @Column()
    amount: number;

    @Column()
    avalable_installment: number;

    @OneToOne(() => UserEntity)
    user: UserEntity;
}