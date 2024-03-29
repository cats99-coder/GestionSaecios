import mongoose from 'mongoose';

export interface Saecio {
  _id: mongoose.Schema.Types.ObjectId;
  nombre: string;
  apellido1: string;
  apellido2: string;
  email: string;
  password: string;
  changePassword: boolean;
  rol: 'admin' | 'user';
}
