import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
    private authService: AuthService,
  ) {
  }

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Get the token from the request (e.g., from headers, cookies, or query parameters)
    const token = request.headers['authorization'].split(' ')[1];
    if (!token) {
      return false; // No token found, deny access
    }


    try {
      // Decode and verify the token using the JwtService
      const decodedToken = this.jwtService.verify(token);
      const userPhone = atob(decodedToken.payload.slice(1));
      const user = await this.authService.findOneId(decodedToken[0]);

      if (user.telephone === userPhone && user.status !== 'user') {
        return true;
      }
      return false; // Access is granted
    } catch (error) {
      return false; // Token is invalid or expired, deny access
    }
  }
}
