import { Movies_Schedules } from 'src/domains/movies/entity/movies_schedules.entity';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { Orders } from './orders.entity';

@Entity()
export class Order_Items extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Orders, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'order_id' })
  order_id: number;

  @OneToOne(() => Movies_Schedules, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_schedule_id' })
  movie_schedule_id: number;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  sub_total_price: number;

  @Column()
  snapshots: string;
}