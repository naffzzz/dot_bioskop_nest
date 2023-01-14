import { Schedules } from 'src/domains/schedules/entity/schedules.entity';
import { Studios } from 'src/domains/studios/entity/studios.entity';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Movies } from './movies.entity';

@Entity()
export class Movies_Schedules extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Movies, (movie) => movie.movieSchedules,{
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie_id: number;

  @ManyToOne(() => Studios, {
    onDelete: 'CASCADE',
    eager: true
  })
  @JoinColumn({ name: 'studio_id' })
  Studio: number;

  @ManyToOne(() => Schedules, (schedules) => schedules.id,{
    onDelete: 'CASCADE',
    eager: true
  })
  @JoinColumn({ name: 'schedule_id' })
  Schedules: number;

  @Column()
  price: number;
}