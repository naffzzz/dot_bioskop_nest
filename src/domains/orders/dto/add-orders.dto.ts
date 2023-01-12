import { IsEmail, isNotEmpty, IsNotEmpty } from 'class-validator';

export class AddOrdersDto {
    @IsNotEmpty()
    payment_method: string;

    user_id: number;

    @IsNotEmpty()
    movie_schedule_id: number;

    @IsNotEmpty()
    qty: number;
    
    @IsNotEmpty()
    price: number;

    snapshots: string;

}