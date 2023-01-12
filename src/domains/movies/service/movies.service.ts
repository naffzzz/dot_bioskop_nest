import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { Movies } from '../entity/movies.entity';
import { AddMoviesDto } from '../dto/add-movies.dto';
import { EditMoviesDto } from '../dto/edit-movies.dto';
import { Movies_Schedules } from '../entity/movies_schedules.entity';
import { Movies_Tags } from '../entity/movies_tags.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,

    @InjectRepository(Movies_Schedules)
    private movieSchedulesRepository: Repository<Movies_Schedules>,

    @InjectRepository(Movies_Tags)
    private movieTagsRepository: Repository<Movies_Tags>,
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

    await this.moviesRepository.save(movies);
    
    this.createMovieTag(addMoviesDto, movies.id);

    return movies;

  }

  async createMovieTag(addMoviesDto : AddMoviesDto, movieId : number): Promise<Movies_Tags> {
    const movieTags = new Movies_Tags();
    movieTags.movie_id = movieId;
    movieTags.tag_id = addMoviesDto.tag_id;
    movieTags.created_at = new Date();

    return await this.movieTagsRepository.save(movieTags);
  }

  async updateMovie(editMoviesDto : EditMoviesDto, id: number): Promise<Movies> {
    const movies = await this.findOne(id);
    
    movies.title = editMoviesDto.title;
    movies.overview = editMoviesDto.overview;
    movies.poster = editMoviesDto.poster;
    
    movies.play_until = editMoviesDto.play_until;
    movies.updated_at = new Date();

    await this.moviesRepository.update(id, movies);
    this.updateMovieTag(editMoviesDto, id);

    return movies;

  }

  async updateMovieTag(addMoviesDto : EditMoviesDto, movieId : number): Promise<Movies_Tags> {
    const movieTags = await this.movieTagsRepository.findOne({where : {'movie_id' : movieId}});
    
    movieTags.tag_id = addMoviesDto.tag_id;
    movieTags.updated_at = new Date();
    await this.movieTagsRepository.update(movieTags.id, movieTags);

    return movieTags;
  }

  async deleteMovie(id: number): Promise<Movies> {
    const user = await this.findOne(id);

    user.deleted_at = new Date();

    await this.moviesRepository.update(id, user);

    return user;

  }

  async findOne(id: number): Promise<Movies> {
    const found = await this.moviesRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Movies with ID ${id} is not found`);
    }

    return found;
  }

  async remove(id: string): Promise<void> {
    await this.moviesRepository.delete(id);
  }
}