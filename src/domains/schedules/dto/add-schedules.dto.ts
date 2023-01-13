import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddSchedulesDto {
  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  start_time: string;

  @IsNotEmpty()
  end_time: string;
}