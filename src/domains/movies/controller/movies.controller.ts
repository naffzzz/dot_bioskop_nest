import { Get, Controller, Render, Patch, Param, Body, Put, Post } from '@nestjs/common';
import { AddMoviesDto } from '../dto/add-movies.dto';
import { EditMoviesDto } from '../dto/edit-movies.dto';
import { MoviesService } from '../service/movies.service';

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
  async addUser(@Body() addUserDto: AddMoviesDto) {
    return await this.moviesService.createMovie(addUserDto);

  }

  @Put(':id') 
  async editUser(@Body() editUserDto: EditMoviesDto, @Param('id') id:number) {
    return await this.moviesService.updateMovie(editUserDto, id);
  }


  @Patch(':id') 
  async deleteUser(@Param('id') id:number) {
    return await this.moviesService.deleteMovie(id);
  }
}