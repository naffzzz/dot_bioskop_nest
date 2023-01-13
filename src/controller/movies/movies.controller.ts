import { Get, Controller, Render, Patch, Param, Body, Put, Post } from '@nestjs/common';
import { AddMovieSchedulesDto } from '../../domains/movies/dto/add-movie-schedules.dto';
import { AddMoviesDto } from '../../domains/movies/dto/add-movies.dto';
import { EditMovieSchedulesDto } from '../../domains/movies/dto/edit-movie-schedules.dto';
import { EditMoviesDto } from '../../domains/movies/dto/edit-movies.dto';
import { MoviesService } from '../../domains/movies/service/movies.service';

@Controller('api/v1/movies')
export class MoviesController {
  constructor(
    private moviesService: MoviesService,
  ) {}

  @Get(':id') 
  async find(@Param('id') id:number) {
    return await this.moviesService.findOne(id) ;
  }

  @Get() 
  async findAll() {
    return await this.moviesService.findAll();
  }

  @Post() 
  async addMovie(@Body() addMovieDto: AddMoviesDto) {
    return await this.moviesService.createMovie(addMovieDto);

  }

  @Put(':id') 
  async editMovie(@Body() editMovieDto: EditMoviesDto, @Param('id') id:number) {
    return await this.moviesService.updateMovie(editMovieDto, id);
  }

  @Patch(':id') 
  async deleteMovie(@Param('id') id:number) {
    return await this.moviesService.deleteMovie(id);
  }

  @Post('schedules/:id') 
  async addMovieSchedule(@Body() addMovieScheduleDto: AddMovieSchedulesDto, @Param('id') id:number) {
    return await this.moviesService.createMovieSchedule(addMovieScheduleDto, id);

  }

  @Put('schedules/:id') 
  async editMovieSchedule(@Body() editMovieScheduleDto: EditMovieSchedulesDto, @Param('id') id:number) {
    return await this.moviesService.updateMovieSchedule(editMovieScheduleDto, id);
  }


  @Patch('schedules/:id') 
  async deletMovieSchedule(@Param('id') id:number) {
    return await this.moviesService.deleteMovieSchedule(id);
  }
}