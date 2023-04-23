import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MetodosPagoModule } from './metodos-pago.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MetodosPagoModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: +process.env.PORT_METODOS_PAGOS,
      },
    },
  );
  await app.listen();
}
bootstrap();
