import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EditMovieSchedulesDto {
  schedule_id: number;

  studio_id: number;
  
  price: number;
  
}