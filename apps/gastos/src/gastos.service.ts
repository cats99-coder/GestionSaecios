import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gasto, GastoDocument } from './entities/gasto.entity';
import { ProveedorDocument } from './entities/proveedor.entity';

@Injectable()
export class GastosService {
  constructor(
    @InjectModel('gasto') private gastoModel: Model<GastoDocument>,
    @InjectModel('proveedor') private proveedorModel: Model<ProveedorDocument>,
  ) {}

  async findAll() {
    return await this.gastoModel.find();
  }
  async findOneById(_id) {
    return await this.gastoModel.findById(_id);
  }
  async create(gasto): Promise<Gasto> {
    const gastos: Array<any> = await this.gastoModel.find({}).exec();
    const year = new Date().getFullYear() - 2000;
    console.log(gastos);
    if (gastos.length === 0)
      return this.gastoModel.create({ ...gasto, numero: `${year}/1` });
    const gastosByYear = gastos
      .filter((gasto) => {
        const [a, b] = gasto.numero.split('/');
        return Number(a) === year;
      })
      .sort((gastoA, gastoB) => {
        const a = gastoA.numero.split('/')[1];
        const b = gastoB.numero.split('/')[1];
        return Number(b) - Number(a);
      });
    if (gastosByYear.length === 0)
      return this.gastoModel.create({ ...gasto, numero: `${year}/1` });
    const index = Number(gastosByYear[0].numero.split('/')[1]) + 1;
    return this.gastoModel.create({
      ...gasto,
      numero: `${year}/${index}`,
    });
  }
  async update(_id, gasto) {
    return this.gastoModel.updateOne({ _id }, gasto);
  }
  async delete(_id): Promise<any> {
    return this.gastoModel.findByIdAndDelete(_id);
  }
  async getProveedores() {
    return this.proveedorModel.find({});
  }
  async createProveedor(proveedor) {
    return this.proveedorModel.create(proveedor);
  }
}
