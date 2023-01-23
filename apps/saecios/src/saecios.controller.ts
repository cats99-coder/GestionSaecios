import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices/decorators';
import { SaeciosService } from './saecios.service';

@Controller()
export class SaeciosController {
  constructor(private readonly saeciosService: SaeciosService) {}
  
}
