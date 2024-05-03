import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';

export class ProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @Length(2, 200)
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
