import { Module } from '@nestjs/common';
import { SaeciosController } from './saecios.controller';
import { SaeciosService } from './saecios.service';

@Module({
  imports: [],
  controllers: [SaeciosController],
  providers: [SaeciosService],
})
export class SaeciosModule {}
