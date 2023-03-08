import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { Grupo } from '../entities/grupo.entity';

@Injectable()
export class GruposService {
  constructor(
    @InjectModel('grupo-producto') private grupoModel: Model<Grupo>,
  ) {}
  async findAll(): Promise<Grupo[]> {
    return this.grupoModel.find();
  }
  async findOneById(_id): Promise<Grupo> {
    return this.grupoModel.findOne(_id);
  }
  async create(grupo): Promise<Grupo> {
    return this.grupoModel.create(grupo);
  }
  async update(_id, grupo) {
    this.grupoModel.updateOne(_id, grupo);
  }
  async delete(_id): Promise<any> {
    return this.grupoModel.findByIdAndDelete(_id);
  }
}
