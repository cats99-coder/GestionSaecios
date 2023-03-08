import mongoose from 'mongoose';

export interface MetodoPago {
  _id: mongoose.Schema.Types.ObjectId;
  tipo: 'bizum' | 'cuenta_bancaria' | 'efectivo';
}

export interface Bizum extends MetodoPago {
  numero_telefono: string;
}

export interface CuentaBancaria extends MetodoPago {
  numero_cuenta: string;
}

export type Efectivo = MetodoPago;
