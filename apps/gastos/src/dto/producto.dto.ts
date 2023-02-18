import mongoose from 'mongoose';

export interface Producto {
  _id: mongoose.Schema.Types.ObjectId;
  nombre: string;
  grupo: object;
}
