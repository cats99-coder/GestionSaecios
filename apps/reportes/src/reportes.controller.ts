import { Controller } from '@nestjs/common';
import { Header } from '@nestjs/common/decorators';
import { MessagePattern } from '@nestjs/microservices';
import { ReportesService } from './reportes.service';

@Controller()
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @MessagePattern('productos')
  async getHello(productos): Promise<any> {
    return this.reportesService.getHello(productos);
  }
}
