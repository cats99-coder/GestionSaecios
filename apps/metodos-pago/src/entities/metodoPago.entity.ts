import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MetodoPagoDocument = HydratedDocument<MetodoPago>;

@Schema()
export class MetodoPago {
  @Prop({ enum: ['bizum', 'cuenta_bancaria', 'efectivo'], required: true })
  tipo: string;
  @Prop()
  numero_telefono: string;
  @Prop()
  numero_cuenta: string;
  @Prop()
  nombre: string;
}

export const MetodoPagoSchema = SchemaFactory.createForClass(MetodoPago);
