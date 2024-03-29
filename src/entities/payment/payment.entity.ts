import { Column, Entity, ManyToOne } from 'typeorm';
import { MainEntity } from '../main/main.entity';
import { InstallmentEntity } from '../installment/installment.entity';

@Entity({ schema: 'public', name: 'payment' })
export class PaymentEntity extends MainEntity {
    @Column()
    name: string;

    @Column()
    payed: boolean;

    @Column()
    dou: Date;

    @Column()
    payed_date: Date;

    @Column()
    delay: number;

    @Column()
    owed: number;

    @ManyToOne(() => InstallmentEntity, (installment) => installment.payment)
    installment: InstallmentEntity;
}