import { Base_Entity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Studios extends Base_Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  studio_number: number;

  @Column()
  seat_capacity: number;
}