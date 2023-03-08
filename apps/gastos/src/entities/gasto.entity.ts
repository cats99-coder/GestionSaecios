import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Saecio } from '../dto/saecio.dto';
import { Linea, LineaSchema } from './linea.entity';
import { Proveedor } from './proveedor.entity';

export type GastoDocument = HydratedDocument<Gasto>;
@Schema({ virtuals: true })
export class Gasto {
  @Prop({ required: true, unique: true })
  numero: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'proveedor' })
  proveedor: Proveedor;
  @Prop()
  fecha: Date;
  @Prop({ type: [LineaSchema] })
  lineas: Linea[];
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  saecio: Saecio;
}

export const GastoSchema = SchemaFactory.createForClass(Gasto);
