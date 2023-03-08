import { Module } from '@nestjs/common';
import { ReportesController } from './reportes.controller';
import { ReportesService } from './reportes.service';

@Module({
  imports: [],
  controllers: [ReportesController],
  providers: [ReportesService],
})
export class ReportesModule {}
