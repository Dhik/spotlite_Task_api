// create-order.dto.ts
import { IsNotEmpty, IsString, IsEmail, IsInt, Min, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  bookName: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  customerName: string;

  @IsNotEmpty()
  @IsEmail()
  customerEmail: string;

  @IsOptional()
  @IsString()
  status?: string; // This field is optional for creation, as it defaults to 'pending'

  // createdAt and updatedAt are not included as they are managed by the database
}
