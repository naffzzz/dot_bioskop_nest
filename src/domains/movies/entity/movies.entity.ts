import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  overview: string;

  @Column()
  poster: string;

  @Column()
  play_until: string;
}