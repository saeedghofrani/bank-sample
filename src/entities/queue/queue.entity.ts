import { Column, Entity, ManyToOne } from 'typeorm';
import { MainEntity } from '../main/main.entity';
import { InstallmentEntity } from '../installment/installment.entity';

@Entity({ schema: 'public', name: 'queue' })
export class QueueEntity extends MainEntity {
    @Column()
    name: string;

    @Column()
    priority: number;

    @Column()
    queue_time: Date;

    @ManyToOne(() => InstallmentEntity, (installment) => installment.payment)
    installment: InstallmentEntity;
}