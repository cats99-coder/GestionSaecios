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
    return this.saecioModel.findOne(_id);
  }
  async create(saecio): Promise<Saecio> {
    return this.saecioModel.create(saecio);
  }
  async update(_id, saecio) {
    this.saecioModel.update(_id, saecio);
  }
  async delete(_id): Promise<any> {
    return this.saecioModel.deleteOne(_id);
  }
}
