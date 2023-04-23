import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { MetodosPagoService } from './metodos-pago.service';

@Controller()
export class MetodosPagoController {
  constructor(private readonly metodosService: MetodosPagoService) {}
  @MessagePattern('metodos_pago_findAll')
  async findAll() {
    return this.metodosService.findAll();
  }
  @MessagePattern('metodos_pago_findOneById')
  async findOneById(_id) {
    return this.metodosService.findOneById(_id);
  }
  @MessagePattern('metodos_pago_create')
  async create(saecio) {
    return this.metodosService.create(saecio);
  }
  @MessagePattern('metodos_pago_update')
  async update(data) {
    return await this.metodosService.update(data._id, data.metodoPago);
  }
  @MessagePattern('metodos_pago_delete')
  async delete(_id) {
    return this.metodosService.delete(_id);
  }
  @MessagePattern('populate')
  async populate(metodos) {
    return this.metodosService.populate(metodos);
  }
}
