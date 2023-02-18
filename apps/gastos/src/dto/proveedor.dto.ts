import mongoose from 'mongoose';

export interface Proveedor {
  _id: mongoose.Schema.Types.ObjectId;
  nombre: string;
}
