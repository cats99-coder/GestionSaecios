import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { GruposService } from './grupos.service';

@Controller('grupos')
export class GruposController {
  constructor(private readonly gruposService: GruposService) {}

  @MessagePattern('grupos_findAll')
  async findAll() {
    return this.gruposService.findAll();
  }
  @MessagePattern('grupos_findOneById')
  async findOneById(_id) {
    return this.gruposService.findOneById(_id);
  }
  @MessagePattern('grupos_create')
  async create(saecio) {
    return this.gruposService.create(saecio);
  }
  @MessagePattern('grupos_update')
  async update(data) {
    return this.gruposService.update(data._id, data.saecio);
  }
  @MessagePattern('grupos_delete')
  async delete(_id) {
    return this.gruposService.delete(_id);
  }
}
