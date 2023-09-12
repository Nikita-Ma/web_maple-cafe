import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );
    const hashedPhone = await this.authService.hashPassword(
      createUserDto.telephone,
    );
    const updatedData = {
      ...createUserDto,
      password: hashedPassword,
      telephone: hashedPhone,
    };
    return this.authService.registerUser(updatedData);
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards()
  @Post('login')
  signIn(@Body() signInDto: Record<string, string>) {
    console.log(signInDto);
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
