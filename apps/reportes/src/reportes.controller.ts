import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ReportesService } from './reportes.service';

@Controller()
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @MessagePattern('productos')
  async listadoProductos(productos): Promise<any> {
    const res = await this.reportesService.listadoProductos(productos);
    return res;
  }
}
