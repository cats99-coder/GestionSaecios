import { Body, Controller, Delete, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('productos-grupos')
export class GruposController {
    constructor(@Inject('PRODUCTOS_SERVICE') private productosClient: ClientProxy) {}
  @Get()
  async findAll() {
    return this.productosClient.send('grupos_findAll', {});
  }
  @Get(':id')
  async findOneById(@Param('id') _id) {
    return this.productosClient.send('grupos_findOneById', _id);
  }
  @Post()
  async create(@Body() grupo) {
    return this.productosClient.send('grupos_create', grupo);
  }
  @Post(':id')
  async update(@Param('id') _id, @Body() grupo) {
    return this.productosClient.send('grupos_update', { _id, grupo });
  }
  @Delete(':id')
  async delete(@Param('id') _id) {
    return this.productosClient.send('grupos_delete', _id);
  }
}
