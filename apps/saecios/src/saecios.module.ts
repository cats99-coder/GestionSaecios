import { Module } from '@nestjs/common';
import { SaeciosController } from './saecios.controller';
import { SaeciosService } from './saecios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saecio, SaecioSchema } from './entities/saecio.entity';
import { MongooseModule } from '@nestjs/mongoose/dist';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/hiberus'),
    MongooseModule.forFeature([{ name: 'saecio', schema: SaecioSchema }]),
  ],
  controllers: [SaeciosController],
  providers: [SaeciosService],
})
export class SaeciosModule {}
