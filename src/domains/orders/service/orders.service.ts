import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { timeStamp } from 'console';
import { IsNull, Not, Repository } from 'typeorm';
import { AddOrdersDto } from '../dto/add-orders.dto';
import { EditOrdersDto } from '../dto/edit-orders.dto';
import { Orders } from '../entity/orders.entity';
import { Order_Items } from '../entity/order_items.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Orders)
    private ordersRepository: Repository<Orders>,

    @InjectRepository(Order_Items)
    private orderItemsRepository: Repository<Order_Items>,
  ) {}

  async findAll(): Promise<Orders[]> {
    return await this.ordersRepository.find();
  }

  async createOrder(addOrdersDto : AddOrdersDto): Promise<Orders> {
    const orders = new Orders();
    orders.payment_method = addOrdersDto.payment_method;
    orders.total_item_price = 0;
    orders.created_at = new Date();
    orders.user_id = addOrdersDto.user_id;

    await this.ordersRepository.save(orders);

    var orderItems = this.createOrderItem(addOrdersDto, orders.id);
    orders.total_item_price = (await orderItems).sub_total_price;

    await this.ordersRepository.update(orders.id, orders);

    return orders;

  }

  async createOrderItem(addOrdersDto : AddOrdersDto, orderId : number): Promise<Order_Items> {
    const orderItems = new Order_Items();
    orderItems.movie_schedule_id = addOrdersDto.movie_schedule_id;
    orderItems.order_id = orderId;
    orderItems.price = addOrdersDto.price;
    orderItems.qty = addOrdersDto.qty;
    orderItems.sub_total_price = addOrdersDto.price * addOrdersDto.qty;
    orderItems.snapshots = addOrdersDto.snapshots;
    orderItems.created_at = new Date();

    return await this.orderItemsRepository.save(orderItems);

  }

  // async updateOrder(editOrdersDto : EditOrdersDto, id: number): Promise<Orders> {
  //   const orders = await this.findOne(id);
    
  //   orders.studio_number = editOrdersDto.studio_number;
  //   orders.seat_capacity = editOrdersDto.seat_capacity;
  //   orders.updated_at = new Date();

  //   await this.ordersRepository.update(id, orders);

  //   return orders;

  // }

  async deleteOrder(id: number): Promise<Orders> {
    const orders = await this.findOne(id);

    orders.deleted_at = new Date();

    await this.ordersRepository.update(id, orders);

    return orders;

  }

  async findOne(id: number): Promise<Orders> {
    const found = await this.ordersRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Order with ID ${id} is not found`);
    }

    return found;
  }

  async remove(id: string): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}