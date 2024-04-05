// order.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity'; // Import the Order entity

@Module({
  imports: [TypeOrmModule.forFeature([Order])], // Import the Order entity into the module
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
