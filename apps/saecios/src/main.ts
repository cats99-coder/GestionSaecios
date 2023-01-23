import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SaeciosModule } from './saecios.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SaeciosModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
