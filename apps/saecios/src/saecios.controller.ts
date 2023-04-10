import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices/decorators';
import { SaeciosService } from './saecios.service';

@Controller()
export class SaeciosController {
  constructor(private saeciosService: SaeciosService) {}
  @MessagePattern('saecios_findAll')
  async findAll() {
    return this.saeciosService.findAll();
  }
  @MessagePattern('findOneByEmail')
  async findOneByEmail(email) {
    return this.saeciosService.findOneByEmail(email);
  }
  @MessagePattern('saecios_findOneById')
  async findOneById(_id) {
    return this.saeciosService.findOneById(_id);
  }
  @MessagePattern('saecios_create')
  async create(saecio) {
    return this.saeciosService.create(saecio);
  }
  @MessagePattern('saecios_update')
  async update(data) {
    return this.saeciosService.update(data._id, data.saecio);
  }
  @MessagePattern('saecios_delete')
  async delete(_id) {
    return this.saeciosService.delete(_id);
  }
  @MessagePattern('saecios_populate')
  async populate(saecios) {
    return this.saeciosService.populate(saecios);
  }
}
