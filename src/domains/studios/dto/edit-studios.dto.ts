import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EditStudiosDto {
    studio_number: number;
  
    seat_capacity: number;
}