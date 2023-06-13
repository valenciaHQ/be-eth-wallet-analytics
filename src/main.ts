import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ETH wallet analitycs')
    .setDescription('The ETH wallet analitycs API description')
    .setVersion('1.0')
    .addTag('eth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}
bootstrap();
