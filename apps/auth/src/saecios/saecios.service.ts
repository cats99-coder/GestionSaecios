import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Saecio } from '../dto/saecio.dto';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable()
export class SaeciosService {
  constructor(@Inject('SAECIOS_SERVICE') private saeciosClient: ClientProxy) {}
  async findOne(email: string): Promise<Saecio> {
    return await lastValueFrom(
      this.saeciosClient.send<Saecio, string>('findOneByEmail', email),
    );
  }
}
