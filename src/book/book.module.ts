import { Module } from '@nestjs/common';
import { BookService } from './book.service'; // Adjusted service import
import { BookController } from './book.controller'; // Adjusted controller import
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity'; // Adjusted entity import

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // Adjusted entity reference
  controllers: [BookController], // Adjusted controller reference
  providers: [BookService] // Adjusted service reference
})
export class BookModule { } // Adjusted module name
