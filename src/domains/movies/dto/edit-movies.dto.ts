import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EditMoviesDto {
  title: string;

  overview: string;

  poster: string;

  play_until: string;

  tag_id: number;
  
}