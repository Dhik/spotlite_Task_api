import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import { Todo } from './todo/entities/todo.entity';
import { BookModule } from './book/book.module';
import { Book } from './book/entities/book.entity';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { OrderModule } from './order/order.module';
import { BuyModule } from './buy/buy.module';
import { Order } from './order/entities/order.entity';
import { Buy } from './buy/entities/buy.entity';


@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot()],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DATABASE_HOST'),
      port: +configService.get('DATABASE_PORT'),
      username: configService.get('DATABASE_USER'),
      password: configService.get('DATABASE_PASSWORD'),
      database: configService.get('DATABASE_NAME'),
      entities: [Todo, Book, Order, Buy],
      synchronize: true,
    }),
    inject: [ConfigService]
  }), TodoModule, BookModule, ConfigModule.forRoot({ envFilePath: ['.env'] }), BookModule, UserModule, AuthModule, OrderModule, BuyModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
