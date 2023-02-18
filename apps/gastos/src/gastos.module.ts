import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GastoSchema } from './entities/gasto.entity';
import { ProveedorSchema } from './entities/proveedor.entity';
import { GastosController } from './gastos.controller';
import { GastosService } from './gastos.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/hiberus'),
    MongooseModule.forFeature([
      { name: 'gasto', schema: GastoSchema },
      { name: 'proveedor', schema: ProveedorSchema },
    ]),
  ],
  controllers: [GastosController],
  providers: [GastosService],
})
export class GastosModule {}
