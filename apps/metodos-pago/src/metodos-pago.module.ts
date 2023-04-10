import { Module } from '@nestjs/common';
import { MetodosPagoController } from './metodos-pago.controller';
import { MetodosPagoService } from './metodos-pago.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MetodoPagoSchema } from './entities/metodoPago.entity';
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
