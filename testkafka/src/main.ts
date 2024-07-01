import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // Create the HTTP server
  const app = await NestFactory.create(AppModule);

  // Create the Kafka microservice
  const kafkaOptions: MicroserviceOptions = {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['kafka-srv.default.svc.cluster.local:9092'],
        clientId: 'nestjs-client',
      },
      consumer: {
        groupId: 'nestjs-group',
      },
    },
  };
  console.log('Starting Kafka microservice');
  // setTimeout(async () => {
  //   app.connectMicroservice<MicroserviceOptions>(kafkaOptions);
  //   await app.startAllMicroservices();
  //   console.log('Kafka microservice started');

  //   // Start the HTTP server on port 3000
  //   await app.listen(3000);
  //   console.log('HTTP server listening on port 3000');
  // }, 4000);

  // Start the Kafka microservice
  // app.connectMicroservice<MicroserviceOptions>(kafkaOptions);
  // await app.startAllMicroservices();
  // console.log('Kafka microservice started');

  // // Start the HTTP server on port 3000
  // await app.listen(3000);
  // console.log('HTTP server listening on port 3000');

  app.connectMicroservice<MicroserviceOptions>(kafkaOptions);
  await app.startAllMicroservices();
  console.log('Kafka microservice started');

  // Start the HTTP server on port 3000
  await app.listen(3000);
  console.log('HTTP server listening on port 3000');
}

bootstrap();
