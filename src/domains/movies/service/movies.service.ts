import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { Movies } from '../entity/movies.entity';
import { AddMoviesDto } from '../dto/add-movies.dto';
import { EditMoviesDto } from '../dto/edit-movies.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
  ) {}

  async findAll(): Promise<Movies[]> {
    return await this.moviesRepository.find();
  }

  async createMovie(addMoviesDto : AddMoviesDto): Promise<Movies> {
    const movies = new Movies();
    movies.title = addMoviesDto.title;
    movies.overview = addMoviesDto.overview;
    movies.poster = addMoviesDto.poster;
    
    movies.play_until = addMoviesDto.play_until;
    movies.created_at = new Date();

    return await this.moviesRepository.save(movies);

  }

  async updateMovie(editMoviesDto : EditMoviesDto, id: number): Promise<Movies> {
    const movies = await this.findOne(id);
    
    movies.title = editMoviesDto.title;
    movies.overview = editMoviesDto.overview;
    movies.poster = editMoviesDto.poster;
    
    movies.play_until = editMoviesDto.play_until;
    movies.updated_at = new Date();

    await this.moviesRepository.update(id, movies);

    return movies;

  }

  async deleteMovie(id: number): Promise<Movies> {
    const user = await this.findOne(id);

    user.deleted_at = new Date();

    await this.moviesRepository.update(id, user);

    return user;

  }

  async findOne(id: number): Promise<Movies> {
    return await this.moviesRepository.findOneByOrFail({ id });
  }

  async remove(id: string): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}