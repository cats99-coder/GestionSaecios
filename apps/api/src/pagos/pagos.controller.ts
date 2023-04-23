import { Controller } from '@nestjs/common';
import {
  Body,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';

@Controller('pagos')
export class PagosController {
  constructor(@Inject('PAGOS_SERVICE') private pagosClient: ClientProxy) {}
  @Get()
  async findAll() {
    return this.pagosClient.send('findAll', {});
  }
  @Get(':id')
  async findOneById(@Param('id') _id) {
    return this.pagosClient.send('pagos_findOneById', _id);
  }
  @Post()
  async create(@Body() pago) {
    return this.pagosClient.send('pagos_create', pago);
  }
  @Post(':id')
  async update(@Param('id') _id, @Body() pago) {
    return this.pagosClient.send('pagos_update', { _id, pago });
  }
  @Delete(':id')
  async delete(@Param('id') _id) {
    return this.pagosClient.send('pagos_delete', _id);
  }
}
