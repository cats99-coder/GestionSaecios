import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SaeciosModule } from './saecios.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SaeciosModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: +process.env.PORT_SAECIOS,
      },
    },
  );
  await app.listen();
}
bootstrap();
