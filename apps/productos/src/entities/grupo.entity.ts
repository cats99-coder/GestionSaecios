import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaFactory } from '@nestjs/mongoose/dist/factories';
import { HydratedDocument } from 'mongoose';

export type GrupoDocument = HydratedDocument<Grupo>;
@Schema()
export class Grupo {
  @Prop({ unique: true })
  nombre: string;
}

export const GrupoSchema = SchemaFactory.createForClass(Grupo);
