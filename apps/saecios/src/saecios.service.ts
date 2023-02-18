import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { Saecio, SaecioDocument } from './entities/saecio.entity';
@Injectable()
export class SaeciosService {
  constructor(
    @InjectModel('saecio') private saecioModel: Model<SaecioDocument>,
  ) {}
  async findAll(): Promise<Saecio[]> {
    return this.saecioModel.find();
  }
  async findOneById(_id): Promise<Saecio> {
    return this.saecioModel.findById(_id);
  }
  async create(saecio): Promise<Saecio> {
    return this.saecioModel.create(saecio);
  }
  async update(_id, saecio) {
    return this.saecioModel.updateOne({ _id }, saecio);
  }
  async delete(_id): Promise<any> {
    return this.saecioModel.findByIdAndDelete(_id);
  }
  async populate(saecios): Promise<any> {
    await this.saecioModel.populate(saecios, { path: 'saecio' });
    return this.saecioModel.populate(saecios, { path: 'receptor' });
  }
}
