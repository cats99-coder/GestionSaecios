import { Schema } from '@nestjs/mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';

export type SaecioDocument = HydratedDocument<Saecio>;
@Schema()
export class Saecio {
  @Prop()
  nombre: string;

  @Prop()
  apellido1: string;

  @Prop()
  apellido2: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: true })
  changePassword: boolean;

  @Prop({ default: 'user' })
  rol: 'admin' | 'user';
}

export const SaecioSchema = SchemaFactory.createForClass(Saecio);
