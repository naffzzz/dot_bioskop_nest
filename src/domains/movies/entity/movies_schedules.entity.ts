import { Schedules } from 'src/domains/schedules/entity/schedules.entity';
import { Studios } from 'src/domains/studios/entity/studios.entity';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Movies_Schedules extends BaseEntity  {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @ManyToOne(() => Studios, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'studio_id' })
  studio_id: number;

  @ManyToOne(() => Schedules, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'schedule_id' })
  schedule_id: number;

  @Column()
  price: number;
}