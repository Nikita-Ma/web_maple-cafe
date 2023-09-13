import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
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

    const updatedData = {
      ...createUserDto,
      password: hashedPassword,
    };
    return this.authService.registerUser(updatedData);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() signInDto: Record<string, string>) {
    return this.authService.logIn(signInDto.email, signInDto.password);
  }

  // @Get('profile')
  // getProfile(@Request() req) {
  //   return false;
  // }
}
