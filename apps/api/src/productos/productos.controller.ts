import { Controller, Get, Param, Post, Body, Inject } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';

@Controller('productos')
export class ProductosController {
  constructor(@Inject('PRODUCTOS_SERVICE') private productosClient: ClientProxy) {}
  @Get()
  async findAll() {
    return this.productosClient.send('productos_findAll', {});
  }
  @Get(':id')
  async findOneById(@Param('id') _id) {
    return this.productosClient.send('productos_findOneById', _id);
  }
  @Post()
  async create(@Body() producto) {
    return this.productosClient.send('productos_create', producto);
  }
  @Post(':id')
  async update(@Param('id') _id, @Body() producto) {
    return this.productosClient.send('productos_update', { _id, producto });
  }
  @Delete(':id')
  async delete(@Param('id') _id) {
    return this.productosClient.send('productos_delete', _id);
  }
}
