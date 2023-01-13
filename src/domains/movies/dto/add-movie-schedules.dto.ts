import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddMovieSchedulesDto {
  movie_id: number;

  schedule_id: number;

  studio_id: number;
  
  price: number;
  
}