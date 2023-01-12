import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tags } from '../entity/tags.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tags])],
  exports: [TypeOrmModule]
})
export class TagsModule {}