export interface MetodoPago {
  tipo: 'bizum' | 'cuenta_bancaria' | 'efectivo';
  numero_telefono?: string;
  numero_cuenta?: string;
  nombre: string;
}
