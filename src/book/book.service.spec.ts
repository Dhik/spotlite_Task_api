import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Book } from './entities/book.entity'; // Adjusted entity import
import { BookService } from './book.service'; // Adjusted service import

describe('BookService', () => { // Adjusted service description
  let service: BookService; // Adjusted service type
  let mockBook: Book = new Book(); // Adjusted entity type

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService, // Adjusted service
        {
          provide: getRepositoryToken(Book), // Adjusted entity
          useValue: {
            save: jest.fn().mockResolvedValue(mockBook), // Adjusted mock method
            find: jest.fn().mockResolvedValue([mockBook]) // Adjusted mock method
          },
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService); // Adjusted service injection
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return array of books', async () => {
      const books = await service.findAll(); // Adjusted method call
      expect(books).toStrictEqual([mockBook]); // Adjusted expectation
    });
  });
});
