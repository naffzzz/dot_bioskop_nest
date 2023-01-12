import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddMoviesDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  overview: string;

  @IsNotEmpty()
  poster: string;

  @IsNotEmpty()
  play_until: string;

  @IsNotEmpty()
  tag_id: number;

  schedule_id: number;
  
}