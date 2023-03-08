import { Controller, Get, Inject } from '@nestjs/common';
import { Header, Res } from '@nestjs/common/decorators';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { lastValueFrom } from 'rxjs';

@Controller('reportes')
export class ReportesController {
  constructor(
    @Inject('REPORTES_SERVICE') private reportesClient: ClientProxy,
    @Inject('PRODUCTOS_SERVICE') private productosClient: ClientProxy,
  ) {}
  @Get('productos')
  async productos(@Res({ passthrough: true }) res: Response) {
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="informe.pdf"',
    });
    const productos = await lastValueFrom(
      this.productosClient.send('productos_findAll', {}),
    );
    return this.reportesClient.send('productos', productos);
  }
}
