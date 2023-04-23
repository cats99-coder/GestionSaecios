import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { SaeciosService } from './saecios/saecios.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.prod.env', '.env'],
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'SAECIOS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
          port: +process.env.PORT_SAECIOS,
        },
      },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT,
      signOptions: { expiresIn: '3m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, SaeciosService],
})
export class AuthModule {}
