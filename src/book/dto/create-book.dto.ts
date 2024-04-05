import { IsNumber, IsString, IsArray, IsBoolean } from "class-validator";

export class CreateBookDto {
    @IsString()
    title: string;

    @IsString()
    writer: string;

    @IsString()
    coverImage: string;

    @IsNumber()
    point: number;

    @IsArray()
    tag: string[];

    @IsBoolean()
    completed: boolean;
}
