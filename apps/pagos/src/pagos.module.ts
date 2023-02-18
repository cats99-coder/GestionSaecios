import { Module } from '@nestjs/common';
import { PagosController } from './pagos.controller';
import { PagosService } from './pagos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PagoSchema } from './entities/pago.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/hiberus'),
    MongooseModule.forFeature([{ name: 'pago', schema: PagoSchema }]),
    ClientsModule.register([
      {
        name: 'SAECIOS_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
      {
        name: 'METODOS_PAGO_SERVICE',
        transport: Transport.TCP,
        options: {
          port: 3005,
        },
      },
    ]),
  ],
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}
