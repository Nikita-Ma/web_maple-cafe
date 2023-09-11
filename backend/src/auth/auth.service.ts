import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

type UserI =
  | [
      {
        entityUsers_email: string;
        entityUsers_id: number;
        entityUsers_password: string;
      },
    ]
  | any[];

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user: UserI = await this.usersService.findOnePerson(email);
    if (user[0]?.entityUsers_password !== pass) {
      throw new UnauthorizedException();
    }
    // const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return user;
  }
}
