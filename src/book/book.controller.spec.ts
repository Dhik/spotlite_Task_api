import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './entities/book.entity'; // Adjust the import
import { BookController } from './book.controller'; // Adjust the import
import { BookService } from './book.service'; // Adjust the import
import { CreateBookDto } from './dto/create-book.dto'; // Adjust the import

describe('BookController', () => { // Adjust the description
  let controller: BookController; // Adjust the controller type
  let bookService: BookService; // Adjust the service type

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController], // Adjust the controller
      providers: [
        BookService, // Adjust the service
        {
          provide: getRepositoryToken(Book), // Adjust the entity
          useValue: {
            save: jest.fn().mockResolvedValue(new Book()), // Adjust to match new Book fields
            find: jest.fn().mockResolvedValue([new Book()]), // Adjust to match new Book fields
          },
        },
      ],
    }).compile();

    controller = module.get<BookController>(BookController); // Adjust the controller
    bookService = module.get<BookService>(BookService); // Adjust the service
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of books', async () => {
      const result = [
        {
          id: 1,
          title: "Sample Title", // Adjust to match new Book fields
          writer: "Sample Writer", // Adjust to match new Book fields
          coverImage: "sample_url.jpg", // Adjust to match new Book fields
          point: 10.99, // Adjust to match new Book fields
          tag: ["fiction"], // Adjust to match new Book fields
          completed: false
        }
      ];
      
      jest.spyOn(bookService, 'findAll').mockResolvedValue(result as Book[]); // Adjust to match new Book fields
      
      expect(await controller.findAll()).toEqual(result);
    });
  });

  // Add more test cases for other controller methods as needed
});
