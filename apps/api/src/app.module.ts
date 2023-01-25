import { Module } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ClientsModule } from '@nestjs/microservices/module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SaeciosController } from './saecios/saecios.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SAECIOS_SERVICE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [AppController, SaeciosController],
  providers: [AppService],
})
export class AppModule {}
