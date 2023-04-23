import { Inject, Injectable } from '@nestjs/common';
import { Pago, PagoDocument } from './entities/pago.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class PagosService {
  constructor(
    @InjectModel('pago') private pagoModel: Model<PagoDocument>,
    @Inject('SAECIOS_SERVICE') private saeciosClient: ClientProxy,
    @Inject('METODOS_PAGO_SERVICE') private metodosClient: ClientProxy,
  ) {}

  async findAll() {
    let pagos: any = await this.pagoModel.find();
    console.log(pagos);
    pagos = await lastValueFrom(this.metodosClient.send('populate', pagos));
    console.log(pagos);
    return this.saeciosClient.send('saecios_populate', pagos);
  }
  async findOneById(_id) {
    let pago: any = await this.pagoModel.findById(_id);
    pago = await lastValueFrom(this.metodosClient.send('populate', pago));
    return this.saeciosClient.send('saecios_populate', pago);
  }
  async create(pago): Promise<Pago> {
    return this.pagoModel.create(pago);
  }
  async update(_id, pago) {
    return this.pagoModel.updateOne({ _id }, pago);
  }
  async delete(_id): Promise<any> {
    return this.pagoModel.findByIdAndDelete(_id);
  }
}
