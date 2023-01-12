import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddStudiosDto {
  @IsNotEmpty()
  studio_number: number;

  @IsNotEmpty()
  seat_capacity: number;
}