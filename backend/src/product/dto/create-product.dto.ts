import { IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  label: string;
  @IsString()
  image: string;
  @IsString()
  description: string;
  @IsNumber()
  nowPrice: number;
  @IsNumber()
  oldPrice: number;
}
