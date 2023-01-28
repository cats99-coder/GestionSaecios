import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaeciosController } from './saecios/saecios.controller';
import { ProductosController } from './productos/productos.controller';
import { GruposController } from './productos/grupos/grupos.controller';

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
    ]),
  ],
  controllers: [AppController, SaeciosController, ProductosController, GruposController],
  providers: [AppService],
})
export class AppModule {}
