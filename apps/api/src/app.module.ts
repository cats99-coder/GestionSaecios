import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaeciosController } from './saecios/saecios.controller';
import { ProductosController } from './productos/productos.controller';
import { GruposController } from './productos/grupos/grupos.controller';
import { PagosController } from './pagos/pagos.controller';
import { MetodosPagoController } from './metodos-pago/metodos-pago.controller';
import { GastosController } from './gastos/gastos.controller';
import { ReportesController } from './reportes/reportes.controller';
import { AuthController } from './auth/auth.controller';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT,
      signOptions: { expiresIn: '10s' },
    }),
    ConfigModule.forRoot({
      envFilePath: ['.prod.env', '.env'],
      isGlobal: true,
    }),
    ClientsModule.register([
      {
        name: 'SAECIOS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_SAECIOS,
          port: +process.env.PORT_SAECIOS,
        },
      },
      {
        name: 'PRODUCTOS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_PRODUCTOS,
          port: +process.env.PORT_PRODUCTOS,
        },
      },
      {
        name: 'PAGOS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_PAGOS,
          port: +process.env.PORT_PAGOS,
        },
      },
      {
        name: 'METODOS_PAGO_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_METODOS_PAGOS,
          port: +process.env.PORT_METODOS_PAGOS,
        },
      },
      {
        name: 'GASTOS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_GASTOS,
          port: +process.env.PORT_GASTOS,
        },
      },
      {
        name: 'REPORTES_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_REPORTES,
          port: +process.env.PORT_REPORTES,
        },
      },
      {
        name: 'AUTH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_AUTH,
          port: +process.env.PORT_AUTH,
        },
      },
    ]),
  ],
  controllers: [
    AppController,
    SaeciosController,
    ProductosController,
    GruposController,
    PagosController,
    MetodosPagoController,
    GastosController,
    ReportesController,
    AuthController,
  ],
  providers: [AppService],
})
export class AppModule {}
