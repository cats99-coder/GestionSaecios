import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductosService } from './productos.service';

@Controller()
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @MessagePattern('productos_findAll')
  async findAll() {
    return this.productosService.findAll();
  }
  @MessagePattern('productos_findOneById')
  async findOneById(_id) {
    return this.productosService.findOneById(_id);
  }
  @MessagePattern('productos_create')
  async create(saecio) {
    return this.productosService.create(saecio);
  }
  @MessagePattern('productos_update')
  async update(data) {
    return this.productosService.update(data._id, data.producto);
  }
  @MessagePattern('productos_delete')
  async delete(_id) {
    return this.productosService.delete(_id);
  }
}
