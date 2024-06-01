import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create the HTTP server
  const app = await NestFactory.create(AppModule);

  // Create the Kafka microservice
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka-srv.default.svc.cluster.local:9092'],
      },
    },
  });

  // Start the HTTP server on port 3000
  await app.listen(3000);
  console.log('HTTP server listening on port 3000');

  // Start the Kafka microservice
  await app.startAllMicroservices();
  console.log('Kafka microservice started');
}

bootstrap();