import { Expose } from 'class-transformer';
import { Movies_Tags } from 'src/domains/movies/entity/movies_tags.entity';
import { BaseEntity } from 'src/infrastructures/entity/base.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Tags extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Movies_Tags, (movieTag) => movieTag.id, {
    onDelete: 'CASCADE',
  })
  @Expose({ name: 'movie_tags' })
  movieTag: Movies_Tags;
}