import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MetodosPagoModule } from './metodos-pago.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MetodosPagoModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3005,
      },
    },
  );
  await app.listen();
}
bootstrap();
