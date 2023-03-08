import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices/client';

@Injectable()
export class AppService {
  constructor(@Inject('SAECIOS_SERVICE') private clientSaecios: ClientProxy) {}
}
