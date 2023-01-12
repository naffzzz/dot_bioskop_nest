import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies_Schedules } from '../entity/movies_schedules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movies_Schedules])],
  exports: [TypeOrmModule]
})
export class MovieSchedulesModule {}