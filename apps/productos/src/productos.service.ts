import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Producto, ProductoDocument } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('producto') private productoModel: Model<ProductoDocument>,
  ) {}
  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().populate('grupo');
  }
  async findOneById(_id): Promise<Producto> {
    return this.productoModel.findById(_id);
  }
  async create(producto): Promise<Producto> {
    return this.productoModel.create(producto);
  }
  async update(_id, producto) {
    return this.productoModel.updateOne({ _id }, producto);
  }
  async delete(_id): Promise<any> {
    return this.productoModel.findByIdAndDelete(_id);
  }
}
