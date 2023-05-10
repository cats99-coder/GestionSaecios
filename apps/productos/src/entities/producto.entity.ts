import { Schema, Prop } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose/dist/factories';
import mongoose, { HydratedDocument } from 'mongoose';
import { Grupo } from './grupo.entity';

export type ProductoDocument = HydratedDocument<Producto>;

@Schema()
export class Producto {
  @Prop({ unique: true })
  nombre: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'grupo-producto' })
  grupo: Grupo;
  @Prop({ default: 'BASICA' })
  tarifa: 'BASICA' | 'PREMIUM';
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
