import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Inject } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaService: ClientKafka,
    private readonly appService: AppService,
  ) {}

  @Get('/api/testKafka/hello')
  getHello(): string {
    console.log('here??');
    this.kafkaService.emit('test-topic.reply', {
      key: { data: 'hello', id: 1 },
    });
    return this.appService.getHello();
  }

  async onModuleInit() {
    this.kafkaService.subscribeToResponseOf('test-topic');
    await this.kafkaService.connect();
    console.log(
      'Kafka service connected and subscribed to topic: test-topic.reply',
    );
  }
  @MessagePattern('test-topic.reply')
  async handleMessage(@Payload() message) {
    console.log('Received message:', message);
    // Handle the message
  }
}
