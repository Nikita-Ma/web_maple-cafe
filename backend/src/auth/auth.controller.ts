import {
  Body,
  ConflictException,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UnauthorizedException,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const hashedPassword = await this.authService.hashPassword(
      createUserDto.password,
    );

    const updatedData = {
      ...createUserDto,
      password: hashedPassword,
    };
    const registeredStatus = await this.authService.registerUser(updatedData);
    if (!registeredStatus) {
      throw new ConflictException(`You already use any data in system!`);
    }
    return registeredStatus;
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async logIn(@Body() signInDto: Record<string, string>) {
    const logInStatus = await this.authService.logIn(
      signInDto.email,
      signInDto.password,
    );
    if (!logInStatus) {
      throw new UnauthorizedException(
        "Please don't try find vulnerability. We'll must banned u",
      );
    }
  }

  // @Get('profile')
  // getProfile(@Request() req) {
  //   return false;
  // }
}
