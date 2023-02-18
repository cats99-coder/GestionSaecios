import { Controller, Get } from '@nestjs/common';
import {  MessagePattern } from '@nestjs/microservices';
import { GastosService } from './gastos.service';

@Controller()
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @MessagePattern('gastos_findAll')
  async findAll() {
    return await this.gastosService.findAll();
  }
  @MessagePattern('gastos_findOneById')
  async findOneById(_id) {
    return this.gastosService.findOneById(_id);
  }
  @MessagePattern('gastos_create')
  async create(gasto) {
    return this.gastosService.create(gasto);
  }
  @MessagePattern('gastos_update')
  async update(data) {
    return await this.gastosService.update(data._id, data.gasto);
  }
  @MessagePattern('gastos_delete')
  async delete(_id) {
    return this.gastosService.delete(_id);
  }
}
