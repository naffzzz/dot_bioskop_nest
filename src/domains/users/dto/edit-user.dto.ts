import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EditUserDto {
  name: string;

  @IsEmail()
  email: string;

  password: string;

  avatar: string;

  isAdmin: boolean;
  
}