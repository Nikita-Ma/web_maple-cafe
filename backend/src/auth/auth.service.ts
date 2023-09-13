import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(email: string, pass: string): Promise<any> {
    // TODO: Refactor User and userData (need one namespace)
    try {
      const user = await this.userRepository
        .createQueryBuilder()
        .where({ email: email })
        .getOne();
      const verifyPassword = await this.comparePasswords(pass, user.password);
      if (!verifyPassword) {
        return false;
      }
      const readyToken = await this.generateToken({
        payload: user.id + btoa(user.telephone),
      });
      return {
        user: {
          firstName: user.firstName,
          lastname: user.lastName,
          status: user.status,
          token: readyToken,
        },
      };
    } catch (e) {
      return false;
    }
  }

  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10; // You can adjust the number of salt rounds for your application.
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
  }

  async generateToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload);
  }

  async registerUser(user) {
    try {
      const userData = await this.userRepository.save(user);
      const readyToken = await this.generateToken({
        payload: userData.id + btoa(userData.telephone),
      });
      return {
        user: {
          firstName: userData.firstName,
          lastname: userData.lastName,
          status: userData.status,
          token: readyToken,
        },
      };
    } catch (e) {
      return false;
    }
  }

  async comparePasswords(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(plainPassword, hashedPassword);
  }

  async findOneId(id: number) {
    return this.userRepository.findOneBy({ id: id });
  }
}
