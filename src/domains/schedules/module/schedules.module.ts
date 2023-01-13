import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Schedules } from '../entity/schedules.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Schedules])],
  exports: [TypeOrmModule]
})
export class SchedulesModule {}