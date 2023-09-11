import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // Check if the user is an admin (you can implement your own logic here)
    const user = await this.userRepository.findOne({
      where: { id: request.params.id },
    });

    if (user.status == 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
