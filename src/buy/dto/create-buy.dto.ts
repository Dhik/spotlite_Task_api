// create-buy.dto.ts
import { IsNotEmpty, IsString, IsEmail, IsInt, Min, IsDecimal, IsDateString } from 'class-validator';

export class CreateBuyDto {
  @IsNotEmpty()
  @IsString()
  bookName: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  buyerName: string;

  @IsNotEmpty()
  @IsEmail()
  buyerEmail: string;

  @IsNotEmpty()
  @IsDecimal()
  price: number;

  @IsNotEmpty()
  @IsDateString()
  transactionDate: Date;

  @IsNotEmpty()
  @IsString()
  paymentMethod: string;

  // createdAt and updatedAt are not included as they are managed by the database
}
