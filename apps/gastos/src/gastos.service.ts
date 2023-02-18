import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Gasto, GastoDocument } from './entities/gasto.entity';

@Injectable()
export class GastosService {
  constructor(
    @InjectModel('gasto') private gastoModel: Model<GastoDocument>,
  ) {}

  async findAll() {
    return await  this.gastoModel.find();
  }
  async findOneById(_id) {
    return await this.gastoModel.findById(_id);
  }
  async create(gasto): Promise<Gasto> {
    return this.gastoModel.create(gasto);
  }
  async update(_id, pago) {
    return this.gastoModel.updateOne({ _id }, pago);
  }
  async delete(_id): Promise<any> {
    return this.gastoModel.findByIdAndDelete(_id);
  }
}
