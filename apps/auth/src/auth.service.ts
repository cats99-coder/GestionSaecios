import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SaeciosService } from './saecios/saecios.service';

@Injectable()
export class AuthService {
  constructor(
    private saeciosService: SaeciosService,
    private jwtService: JwtService,
  ) {}
  async signIn(email: string, password: string) {
    const user = await this.saeciosService.findOne(email);
    console.log(user);
    if (!user || user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.nombre, sub: user._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async verify(token) {
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT,
      });
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }
}
