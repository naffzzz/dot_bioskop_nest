import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orders } from '../entity/orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Orders])],
  exports: [TypeOrmModule]
})
export class OrdersModule {}