import { Module } from '@nestjs/common';
import { PagosController } from './pagos.controller';
import { PagosService } from './pagos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PagoSchema } from './entities/pago.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.prod.env', '.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/hiberus`,
    ),
    MongooseModule.forFeature([{ name: 'pago', schema: PagoSchema }]),
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
        name: 'METODOS_PAGO_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_METODOS_PAGOS,
          port: +process.env.PORT_METODOS_PAGOS,
        },
      },
    ]),
  ],
  controllers: [PagosController],
  providers: [PagosService],
})
export class PagosModule {}
