import { Tags } from 'src/domains/tags/entity/tags.entity';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Movies } from './movies.entity';

@Entity()
export class Movies_Tags extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Movies, (movie) => movie.movieTag,{
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'movie_id' })
  movie_id: number;

  @OneToOne(() => Tags, (tag) => tag.movieTag, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'tag_id' })
  tag_id: number;
}