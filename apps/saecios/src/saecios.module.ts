import { Module } from '@nestjs/common';
import { SaeciosController } from './saecios.controller';
import { SaeciosService } from './saecios.service';
import { SaecioSchema } from './entities/saecio.entity';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.prod.env', '.env'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/hiberus`,
    ),
    MongooseModule.forFeature([{ name: 'saecio', schema: SaecioSchema }]),
  ],
  controllers: [SaeciosController],
  providers: [SaeciosService],
})
export class SaeciosModule {}
