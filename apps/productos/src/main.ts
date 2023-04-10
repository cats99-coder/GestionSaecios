import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProductosModule } from './productos.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProductosModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: +process.env.PORT_PRODUCTOS,
      },
    },
  );
  await app.listen();
}
bootstrap();
