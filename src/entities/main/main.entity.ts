import {
    BaseEntity,
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

export class MainEntity extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @CreateDateColumn({ update: false, default: new Date(Date.now()) })
    create_at: Date;

    @UpdateDateColumn({ update: true, default: new Date(Date.now()) })
    update_at: Date;

    @DeleteDateColumn()
    delete_at: Date;
}
