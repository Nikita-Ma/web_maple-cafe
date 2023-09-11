// user.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Users } from './entities/users.entity';

@EntityRepository(Users)
export class UserRepository extends Repository<Users> {}
