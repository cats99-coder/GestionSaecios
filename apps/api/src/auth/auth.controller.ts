import {
  Controller,
  Inject,
  Get,
  Post,
  Body,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(@Inject('AUTH_SERVICE') private authClient: ClientProxy) {}
  @Post('login')
  async login(@Body() saecio: { email: string; password: string }) {
    if (!saecio) throw new UnauthorizedException();
    return this.authClient.send('login', saecio);
  }
  @Post('verify')
  async verify(@Body('token') token) {
    return this.authClient.send('verify', token);
  }
}
