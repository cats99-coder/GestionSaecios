import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('metodos-pago')
export class MetodosPagoController {
  constructor(
    @Inject('METODOS_PAGO_SERVICE') private metodosClient: ClientProxy,
  ) {}
  @Get()
  async findAll() {
    return this.metodosClient.send('metodos_pago_findAll', {});
  }
  @Get(':id')
  async findOneById(@Param('id') _id) {
    return this.metodosClient.send('metodos_pago_findOneById', _id);
  }
  @Post()
  async create(@Body() metodoPago) {
    return this.metodosClient.send('metodos_pago_create', metodoPago);
  }
  @Post(':id')
  async update(@Param('id') _id, @Body() metodoPago) {
    return this.metodosClient.send('metodos_pago_update', { _id, metodoPago });
  }
  @Delete(':id')
  async delete(@Param('id') _id) {
    return this.metodosClient.send('metodos_pago_delete', _id);
  }
}
