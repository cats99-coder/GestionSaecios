import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MetodoPagoDocument, MetodoPago } from './entities/metodoPago.entity';

@Injectable()
export class MetodosPagoService {
  constructor(
    @InjectModel('metodo-pago')
    private metodoPagoModel: Model<MetodoPagoDocument>,
  ) {}
  async findAll() {
    return this.metodoPagoModel.find();
  }
  async findOneById(_id) {
    return this.metodoPagoModel.findById(_id);
  }
  async create(metodoPago): Promise<MetodoPago> {
    return this.metodoPagoModel.create(metodoPago);
  }
  async update(_id, metodoPago) {
    return this.metodoPagoModel.updateOne({ _id }, metodoPago);
  }
  async delete(_id): Promise<any> {
    return this.metodoPagoModel.deleteOne({ _id });
  }
  async populate(metodos): Promise<any> {
    return this.metodoPagoModel.populate(metodos, { path: 'metodo_pago' });
  }
}
