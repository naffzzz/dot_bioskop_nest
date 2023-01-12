import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Studios } from '../entity/studios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Studios])],
  exports: [TypeOrmModule]
})
export class StudiosModule {}