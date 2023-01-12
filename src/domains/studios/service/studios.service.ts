import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { AddStudiosDto } from '../dto/add-studios.dto';
import { EditStudiosDto } from '../dto/edit-studios.dto';
import { Studios } from '../entity/studios.entity';

@Injectable()
export class StudiosService {
  constructor(
    @InjectRepository(Studios)
    private studiosRepository: Repository<Studios>,
  ) {}

  async findAll(): Promise<Studios[]> {
    return await this.studiosRepository.find();
  }

  async createStudio(addStudiosDto : AddStudiosDto): Promise<Studios> {
    const studios = new Studios();
    studios.studio_number = addStudiosDto.studio_number;
    studios.seat_capacity = addStudiosDto.seat_capacity;
    studios.created_at = new Date();

    return await this.studiosRepository.save(studios);

  }

  async updateStudio(editStudiosDto : EditStudiosDto, id: number): Promise<Studios> {
    const studios = await this.findOne(id);
    
    studios.studio_number = editStudiosDto.studio_number;
    studios.seat_capacity = editStudiosDto.seat_capacity;
    studios.updated_at = new Date();

    await this.studiosRepository.update(id, studios);

    return studios;

  }

  async deleteStudio(id: number): Promise<Studios> {
    const studios = await this.findOne(id);

    studios.deleted_at = new Date();

    await this.studiosRepository.update(id, studios);

    return studios;

  }

  async findOne(id: number): Promise<Studios> {
    return await this.studiosRepository.findOneByOrFail({ id });
  }

  async remove(id: string): Promise<void> {
    await this.studiosRepository.delete(id);
  }
}