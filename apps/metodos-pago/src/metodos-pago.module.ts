import { Module } from '@nestjs/common';
import { MetodosPagoController } from './metodos-pago.controller';
import { MetodosPagoService } from './metodos-pago.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MetodoPagoSchema } from './entities/metodoPago.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/hiberus'),
    MongooseModule.forFeature([
      {
        name: 'metodo-pago',
        schema: MetodoPagoSchema,
        collection: 'metodos-pago',
      },
    ]),
  ],
  controllers: [MetodosPagoController],
  providers: [MetodosPagoService],
})
export class MetodosPagoModule {}
