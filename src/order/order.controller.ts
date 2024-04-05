import { Controller, Post, Body, Delete, Get, Param } from '@nestjs/common';
import { OrderService } from './order.service'; // Import the service
import { CreateOrderDto } from './dto/create-order.dto';
import { FindManyOptions } from 'typeorm';
import { Order } from './entities/order.entity';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {} // Inject the service instance

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto); // Use the injected service instance
  }

  @Delete(':id')
  async cancelOrder(@Param('id') id: string) {
    return this.orderService.cancelOrder(+id); // Use the injected service instance
  }

  @Get('buy')
  async listBuy() {
    const findOptions: FindManyOptions<Order> = {};
    return this.orderService.listBuy(); // Use the injected service instance
  }

  @Get()
  async listOrders() {
    return this.orderService.listOrders();
  }
}
