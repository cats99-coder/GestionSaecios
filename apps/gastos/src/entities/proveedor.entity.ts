import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProveedorDocument = HydratedDocument<Proveedor>;

@Schema()
export class Proveedor {
  @Prop({ unique: true, required: true })
  nombre;
}

export const ProveedorSchema = SchemaFactory.createForClass(Proveedor);
