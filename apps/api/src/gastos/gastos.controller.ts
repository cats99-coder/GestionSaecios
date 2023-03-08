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

@Controller('gastos')
export class GastosController {
  constructor(@Inject('GASTOS_SERVICE') private gastosClient: ClientProxy) {}
  @Get('proveedores')
  async proveedoresFindAlll() {
    return this.gastosClient.send('proveedores_findAll', {});
  }
  @Post('proveedores')
  async proveedorCreate(@Body() proveedor) {
    return this.gastosClient.send('proveedores_create', proveedor);
  }
  @Get()
  async findAll() {
    return this.gastosClient.send('gastos_findAll', {});
  }
  @Get(':id')
  async findOneById(@Param('id') _id) {
    return this.gastosClient.send('gastos_findOneById', _id);
  }
  @Post()
  async create(@Body() pago) {
    return this.gastosClient.send('gastos_create', pago);
  }
  @Post(':id')
  async update(@Param('id') _id, @Body() gasto) {
    return this.gastosClient.send('gastos_update', { _id, gasto });
  }
  @Delete(':id')
  async delete(@Param('id') _id) {
    return this.gastosClient.send('gastos_delete', _id);
  }
}
