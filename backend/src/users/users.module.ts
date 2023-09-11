import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { Users } from './entities/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users, UserRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
