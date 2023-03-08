import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ReportesModule } from './reportes.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReportesModule,
    { transport: Transport.TCP, options: { port: 3007 } },
  );
  await app.listen();
}
bootstrap();
