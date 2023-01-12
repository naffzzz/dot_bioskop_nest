import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Orders extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  payment_method: string;

  @Column()
  total_item_price: number;
}