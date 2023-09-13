import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  id: number;
  @IsString()
  firstName: string;
  @IsString()
  lastName: string;
  @IsString()
  @Length(5, 20)
  password: string;
  status: string;
  @IsString()
  telephone: string;
  @IsEmail()
  email: string;
  banned: boolean;
  orders: number;
  restMoney: number;
  date: Date;
}
