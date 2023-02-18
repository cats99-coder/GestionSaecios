import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { GastosModule } from './gastos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GastosModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3006,
      },
    },
  );
  await app.listen();
}
bootstrap();
