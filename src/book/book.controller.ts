import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { BookService } from './book.service'; // Adjusted service import
import { CreateBookDto } from './dto/create-book.dto'; // Adjusted DTO import
import { UpdateBookDto } from './dto/update-book.dto'; // Adjusted DTO import
import { SearchBookDto } from './dto/search-book.dto'; // Adjusted DTO import

@Controller('books') // Adjusted endpoint path
export class BookController {
  constructor(private readonly bookService: BookService) { } // Adjusted service injection

  @Post()
  create(@Body() createBookDto: CreateBookDto) { // Adjusted DTO type
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll(@Query('completed') completed?: boolean) { // Adjusted query parameter
    return this.bookService.findAll(completed);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) { // Adjusted DTO type
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
  // New route handler for searching books by title
  @Get('search/:id')
  searchBook(@Param('id') title: string) {
    return this.bookService.searchByTitle(title);
  }
}
