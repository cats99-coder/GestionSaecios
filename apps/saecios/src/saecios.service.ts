import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Saecio } from './entities/saecio.entity';
@Injectable()
export class SaeciosService {
  constructor(
    @InjectRepository(Saecio) private saecioRepository: Repository<Saecio>,
  ) {}
  async findAll(): Promise<Saecio[]> {
    return this.saecioRepository.find();
  }
  async findOneById(_id): Promise<Saecio> {
    return this.saecioRepository.findOne(_id);
  }
  async create(saecio): Promise<Saecio> {
    return this.saecioRepository.save(saecio);
  }
  async update(_id, saecio) {
    this.saecioRepository.update(_id, saecio);
  }
  async delete(_id): Promise<any> {
    return this.saecioRepository.delete(_id);
  }
}
