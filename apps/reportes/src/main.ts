import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ReportesModule } from './reportes.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ReportesModule,
    {
      transport: Transport.TCP,
      options: { host: '0.0.0.0', port: +process.env.PORT_REPORTES },
    },
  );
  await app.listen();
}
bootstrap();
