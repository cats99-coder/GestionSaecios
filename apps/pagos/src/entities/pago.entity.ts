import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import {
  Bizum,
  CuentaBancaria,
  Efectivo,
  MetodoPago,
} from '../dto/metodosPago.dto';

import { Saecio } from '../dto/saecio.dto';

export type PagoDocument = HydratedDocument<Pago>;
@Schema()
export class Pago {
  @Prop({ unique: true, sparse: true })
  numero: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  saecio: Saecio;
  @Prop()
  cantidad: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  receptor: Saecio;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  metodo_pago: Bizum | CuentaBancaria | Efectivo;
}
export const PagoSchema = SchemaFactory.createForClass(Pago);
