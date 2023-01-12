import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movies_Tags extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movie_id: number;

  @Column()
  tag_id: number;
}