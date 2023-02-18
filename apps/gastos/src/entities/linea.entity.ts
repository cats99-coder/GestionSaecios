import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Producto } from '../dto/producto.dto';

export type LineaDocument = HydratedDocument<Linea>;

@Schema({ toJSON: { virtuals: true } })
export class Linea {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  producto: Producto;
  @Prop({ default: 0 })
  cantidad: number;
  @Prop({ default: 0 })
  precio: number;
}

export const LineaSchema = SchemaFactory.createForClass(Linea);
LineaSchema.virtual('total').get(function () {
  return this.cantidad * this.precio;
});
