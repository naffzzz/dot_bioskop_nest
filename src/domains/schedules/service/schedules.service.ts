import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { AddSchedulesDto } from '../dto/add-schedules.dto';
import { EditSchedulesDto } from '../dto/edit-schedules.dto';
import { Schedules } from '../entity/schedules.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedules)
    private schedulesRepository: Repository<Schedules>,
  ) {}

  async findAll(): Promise<Schedules[]> {
    return await this.schedulesRepository.find();
  }

  async createSchedule(addSchedulesDto : AddSchedulesDto): Promise<Schedules> {
    const schedules = new Schedules();
    schedules.date = new Date(addSchedulesDto.date);
    schedules.start_time = addSchedulesDto.start_time;
    schedules.end_time = addSchedulesDto.end_time;
    schedules.created_at = new Date();

    return await this.schedulesRepository.save(schedules);

  }

  async updateSchedule(editSchedulesDto : EditSchedulesDto, id: number): Promise<Schedules> {
    const schedules = await this.findOne(id);
    
    schedules.date = new Date(editSchedulesDto.date);
    schedules.start_time = editSchedulesDto.start_time;
    schedules.end_time = editSchedulesDto.end_time;
    schedules.updated_at = new Date();

    await this.schedulesRepository.update(id, schedules);

    return schedules;

  }

  async deleteSchedule(id: number): Promise<Schedules> {
    const schedules = await this.findOne(id);

    schedules.deleted_at = new Date();

    await this.schedulesRepository.update(id, schedules);

    return schedules;

  }

  async findOne(id: number): Promise<Schedules> {
    return await this.schedulesRepository.findOneByOrFail({ id });
  }

  async remove(id: string): Promise<void> {
    await this.schedulesRepository.delete(id);
  }
}