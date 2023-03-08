import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProductosModule } from './productos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductosModule,
    {
      transport: Transport.TCP,
      options: {
        port: 3003,
      },
    },
  );
  await app.listen();
}
bootstrap();
