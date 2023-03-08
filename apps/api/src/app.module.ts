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

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SAECIOS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
      {
        name: 'PRODUCTOS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3003,
        },
      },
      {
        name: 'PAGOS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3004,
        },
      },
      {
        name: 'METODOS_PAGO_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3005,
        },
      },
      {
        name: 'GASTOS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3006,
        },
      },
      {
        name: 'REPORTES_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3007,
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
  ],
  providers: [AppService],
})
export class AppModule {}
