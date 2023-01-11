import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movies } from '../entity/movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
  ) {}

  findAll(): Promise<Movies[]> {
    return this.moviesRepository.find();
  }

  findOne(id: number): Promise<Movies> {
    return this.moviesRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}