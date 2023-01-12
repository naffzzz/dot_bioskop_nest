import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies_Tags } from '../entity/movies_tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies_Tags])],
  exports: [TypeOrmModule]
})
export class MovieTagsModule {}