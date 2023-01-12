import { Module } from '@nestjs/common';
import { OrdersModule } from './module/orders.module';
import { OrdersService } from './service/orders.service';
import { OrdersController } from './controller/orders.controller';
import { OrderItemsModule } from './module/order-items.module';

@Module({
  imports: [OrdersModule, OrderItemsModule],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersHttpModule {}
