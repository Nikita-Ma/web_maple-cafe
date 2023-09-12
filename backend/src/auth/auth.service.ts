import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

// type UserI =
//   | [
//   {
//     entityUsers_email: string;
//     entityUsers_id: number;
//     entityUsers_password: string;
//   },
// ]
//   | any[];

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {
  }

  async logIn(email: string, pass: string): Promise<any> {
    console.log(email);
    const user = await this.userRepository
      .createQueryBuilder()
      .where({ email: email })
      .getOne();
    console.log(user);
    const verifyPassword = await this.comparePasswords(pass, user.password);
    if (!verifyPassword) {
      return;
    }
    const readyToken = this.generateToken({ payload: btoa(user.id + user.telephone) });

    return readyToken;
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can adjust the number of salt rounds for your application.
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }



  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async registerUser(user) {
    return this.userRepository.save(user);
  }


  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async comparePhones(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

}
