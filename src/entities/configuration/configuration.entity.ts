import { Column, Entity } from 'typeorm';
import { MainEntity } from '../main/main.entity';

@Entity({ schema: 'public', name: 'configuration' })
export class ConfigurationEntity extends MainEntity {
    @Column()
    profit: number;

    @Column()
    share_max: number;

    @Column()
    share_amount: number;

    @Column()
    days_for_clouser: number;

    @Column()
    amount_avalable: number;

    @Column()
    amount_on_transfer: number;
}
