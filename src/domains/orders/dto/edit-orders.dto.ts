import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class EditOrdersDto {
  payment_method: string;

  movie_schedule_id: number;

  qty: number;

  price: number;

  sub_total_price: number;

  snapshots: string;

}