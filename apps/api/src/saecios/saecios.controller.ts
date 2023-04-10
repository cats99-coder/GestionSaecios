import { Controller, Get, Param, Post, Body, Inject } from '@nestjs/common';
import { Delete } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller('saecios')
export class SaeciosController {
  constructor(@Inject('SAECIOS_SERVICE') private saeciosClient: ClientProxy) {}
  @Get()
  async findAll() {
    return this.saeciosClient.send('saecios_findAll', {});
  }
  @Get(':id')
  async findOneById(@Param('id') _id) {
    return this.saeciosClient.send('saecios_findOneById', _id);
  }
  @Post()
  async create(@Body() saecio) {
    let res;
    try {
      res = lastValueFrom(this.saeciosClient.send('saecios_create', saecio));
    } catch (err) {
      console.log(err);
      console.log('hola');
    }
    return res;
  }
  @Post(':id')
  async update(@Param('id') _id, @Body() saecio) {
    return this.saeciosClient.send('saecios_update', { _id, saecio });
  }
  @Delete(':id')
  async delete(@Param('id') _id) {
    return this.saeciosClient.send('saecios_delete', _id);
  }
}
