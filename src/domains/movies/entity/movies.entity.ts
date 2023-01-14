import { Expose } from 'class-transformer';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Movies_Tags } from './movies_tags.entity';

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

  @OneToOne(() => Movies_Tags, (movieTag) => movieTag.movie_id, {
    onDelete: 'CASCADE',
  })
  @Expose({ name: 'movie_tags' })
  movieTag: Movies_Tags;
}