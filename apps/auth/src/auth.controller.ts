import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('login')
  async login({ email, password }) {
    return this.authService.signIn(email, password);
  }
  @MessagePattern('verify')
  async verify(token) {
    return this.authService.verify(token);
  }
}
