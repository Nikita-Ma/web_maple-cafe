import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  async createUser(user: Users): Promise<Users> {
    return await this.userRepository.save(user);
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOnePerson(email: string) {
    return this.userRepository
      .createQueryBuilder('entityUsers')
      .select(['entityUsers.id', 'entityUsers.email', 'entityUsers.password'])
      .where({ email: email })
      .getRawMany(); // Use getRawMany instead of getMany
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
