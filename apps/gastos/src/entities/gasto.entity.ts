import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, mongo } from 'mongoose';
import { Proveedor } from '../dto/proveedor.dto';
import { Linea, LineaSchema } from './linea.entity';

export type GastoDocument = HydratedDocument<Gasto>;
@Schema({ virtuals: true })
export class Gasto {
  @Prop({ require: true, unique: true })
  numero: number;
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  proveedor: Proveedor;
  @Prop()
  fecha: Date;
  @Prop({ type: [LineaSchema] })
  lineas: Linea[];
}

export const GastoSchema = SchemaFactory.createForClass(Gasto);
