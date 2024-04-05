import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto'; // Adjusted DTO import
import { UpdateBookDto } from './dto/update-book.dto'; // Adjusted DTO import
import { Book } from './entities/book.entity'; // Adjusted entity import
import { FindManyOptions, FindOneOptions } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) // Adjusted entity injection
    private bookRepository: Repository<Book>, // Adjusted entity type
  ) { }

  create(createBookDto: CreateBookDto) { // Adjusted DTO type
    return this.bookRepository.save(createBookDto);
  }

  async findAll(completed?: boolean) {
    if (completed !== undefined) {
        const findOptions: FindManyOptions<Book> = {
            where: {
                completed: completed
            }
        };
        return await this.bookRepository.find(findOptions);
    } else {
        return await this.bookRepository.find();
    }
}

async findOne(id: number) {
  const findOptions: FindOneOptions<Book> = {
      where: { id: id }
  };
  return await this.bookRepository.findOne(findOptions);
}

async update(id: number, updateBookDto: UpdateBookDto) {
  const findOptions: FindOneOptions<Book> = {
      where: { id: id }
  };

  const book = await this.bookRepository.findOne(findOptions);
  if (!book) {
      throw new NotFoundException("Book not found");
  }

  // Update the fields
  book.title = updateBookDto.title;
  book.writer = updateBookDto.writer;
  book.coverImage = updateBookDto.coverImage;
  book.point = updateBookDto.point;
  book.tag = updateBookDto.tag;

  return this.bookRepository.save(book);
}

  async remove(id: number) { // Adjusted remove method to be async
    const result = await this.bookRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Book not found'); // Adjusted error message
    }
  }

  async searchByTitle(title: string) {
    const findOptions: FindManyOptions<Book> = {
      where: {
        title: ILike(`%${title}%`)
      }
    };
    return await this.bookRepository.find(findOptions);
  }
}
