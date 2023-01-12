import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order_Items extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  order_id: number;

  @Column()
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