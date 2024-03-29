import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Saecio } from './dto/saecio.dto';
import { PagosService } from './pagos.service';

@Controller()
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}
  @MessagePattern('findAll')
  async findAll() {
    return await this.pagosService.findAll();
  }
  @MessagePattern('pagos_findOneById')
  async findOneById(_id) {
    return this.pagosService.findOneById(_id);
  }
  @MessagePattern('pagos_create')
  async create(saecio: Saecio) {
    return this.pagosService.create(saecio);
  }
  @MessagePattern('pagos_update')
  async update(data) {
    return await this.pagosService.update(data._id, data.pago);
  }
  @MessagePattern('pagos_delete')
  async delete(_id) {
    return this.pagosService.delete(_id);
  }
}
