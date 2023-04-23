import { Controller, Get, Inject, StreamableFile } from '@nestjs/common';
import { Res } from '@nestjs/common/decorators';
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
  async productos(@Res({ passthrough: true }) res: Response): Promise<any> {
    const productos = await lastValueFrom(
      this.productosClient.send('productos_findAll', {}),
    );
    const responSafe: string = await lastValueFrom(
      this.reportesClient.send('productos', productos),
    );
    res.set({
      // pdf
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=invoice.pdf',
      // prevent cache
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: 0,
    });
    const respon = Buffer.from(responSafe);
    return new StreamableFile(respon);
  }
}
