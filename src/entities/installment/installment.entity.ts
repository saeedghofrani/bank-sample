import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { MainEntity } from '../main/main.entity';
import { PaymentEntity } from '../payment/payment.entity';
import { UserEntity } from '../user/user.entity';

@Entity({ schema: 'public', name: 'installment' })
export class InstallmentEntity extends MainEntity {
    @Column()
    name: string;

    @Column()
    amount: number;

    @Column()
    last_dou: Date;

    @Column()
    open: boolean;

    @Column()
    last_payed: Date;

    @Column()
    profit: number;

    @Column()
    count: number;

    @OneToMany(() => PaymentEntity, (payment) => payment.installment)
    payment: PaymentEntity[];

    @ManyToOne(() => UserEntity, (user) => user.installment)
    user: UserEntity;
}
