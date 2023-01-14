import { Users } from 'src/domains/users/entity/users.entity';
import { Order_Items } from './order_items.entity';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Orders extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, (user) => user.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user_id: number;

  @Column()
  payment_method: string;

  @Column()
  total_item_price: number;

  @OneToMany(() => Order_Items, (orderItems) => orderItems.order_id,{
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  orderItems: Order_Items[];
}