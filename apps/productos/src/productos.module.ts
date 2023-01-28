import { Module } from '@nestjs/common';
import { ProductoSchema } from './entities/producto.entity';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { GruposController } from './grupos/grupos.controller';
import { GruposService } from './grupos/grupos.service';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { GrupoSchema } from './entities/grupo.entity';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/hiberus'),
    MongooseModule.forFeature([
      { name: 'producto', schema: ProductoSchema },
      {
        name: 'grupo-producto',
        schema: GrupoSchema,
        collection: 'grupos-producto',
      },
    ]),
  ],
  controllers: [ProductosController, GruposController],
  providers: [ProductosService, GruposService],
})
export class ProductosModule {}
