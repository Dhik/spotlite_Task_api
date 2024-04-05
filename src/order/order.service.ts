// order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto) {
    const { bookName, quantity, customerName, customerEmail } = createOrderDto;

    const newOrder = this.orderRepository.create({
      bookName,
      quantity,
      customerName,
      customerEmail,
      status: 'pending', // Assuming default status is 'pending'
    });

    return this.orderRepository.save(newOrder);
  }

  async cancelOrder(id: number) {
    const findOptions: FindOneOptions<Order> = {
        where: { id: id }
    };
    const order = await this.orderRepository.findOne(findOptions);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    order.status = 'cancelled';
    return this.orderRepository.save(order);
  }

  async listBuy() {
    return this.orderRepository.find();
  }
  async listOrders() {
    return this.orderRepository.find();
  }
}
