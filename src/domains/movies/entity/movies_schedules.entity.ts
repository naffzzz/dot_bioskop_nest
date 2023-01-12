import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies_Schedules extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @Column()
  studio_id: number;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  price: number;

  @Column()
  date: number;
}