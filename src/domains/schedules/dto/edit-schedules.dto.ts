import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EditSchedulesDto {
  date: string;

  start_time: string;

  end_time: string;
}