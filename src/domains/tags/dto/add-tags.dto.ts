import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddTagsDto {
  @IsNotEmpty()
  name: string;
}