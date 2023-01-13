import { Get, Controller, Render, Patch, Param, Body, Put, Post } from '@nestjs/common';
import { AddOrdersDto } from '../../domains/orders/dto/add-orders.dto';
import { EditOrdersDto } from '../../domains/orders/dto/edit-orders.dto';
import { OrdersService } from '../../domains/orders/service/orders.service';

@Controller('api/v1/orders')
export class OrdersController {
  constructor(
    private ordersService: OrdersService,
  ) {}

  @Get(':id') 
  async find(@Param('id') id:number) {
    return await this.ordersService.findOne(id) ;
  }

  @Get() 
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Post() 
  async addOrder(@Body() addOrdersDto: AddOrdersDto) {
    return await this.ordersService.createOrder(addOrdersDto);

  }

  // @Put(':id') 
  // async editOrder(@Body() editStudiosDto: EditOrdersDto, @Param('id') id:number) {
  //   return await this.studiosService.updateOrder(editStudiosDto, id);
  // }


  @Patch(':id') 
  async deleteOrder(@Param('id') id:number) {
    return await this.ordersService.deleteOrder(id);
  }
}