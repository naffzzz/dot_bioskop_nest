import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddUserDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  avatar: string;

  isAdmin: boolean;
  
}