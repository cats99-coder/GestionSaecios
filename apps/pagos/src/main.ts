import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PagosModule } from './pagos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PagosModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3004,
      },
    },
  );
  await app.listen();
}
bootstrap();
