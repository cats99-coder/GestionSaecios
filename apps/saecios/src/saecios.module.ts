import { Module } from '@nestjs/common';
import { SaeciosController } from './saecios.controller';
import { SaeciosService } from './saecios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Saecio } from './entities/saecio.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: '127.0.0.1',
      port: 27017,
      database: 'hiberus',
      entities: [Saecio],
      synchronize: true,
      useUnifiedTopology: true
    }),
    TypeOrmModule.forFeature([Saecio])
  ],
  controllers: [SaeciosController],
  providers: [SaeciosService],
})
export class SaeciosModule {}
