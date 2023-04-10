import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GastoSchema } from './entities/gasto.entity';
import { ProveedorSchema } from './entities/proveedor.entity';
import { GastosController } from './gastos.controller';
import { GastosService } from './gastos.service';
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
      { name: 'gasto', schema: GastoSchema },
      { name: 'proveedor', schema: ProveedorSchema },
    ]),
  ],
  controllers: [GastosController],
  providers: [GastosService],
})
export class GastosModule {}
