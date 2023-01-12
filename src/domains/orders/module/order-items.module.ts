import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order_Items } from '../entity/order_items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order_Items])],
  exports: [TypeOrmModule]
})
export class OrderItemsModule {}