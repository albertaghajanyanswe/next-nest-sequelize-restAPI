import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Test BE')
    .setDescription('Description for REST APIs')
    .setVersion('1.0.0')
    .addTag('APIs')
    .addBearerAuth()
    // .addBearerAuth(
    //   {
    //     description: 'Default JWT Authorization',
    //     type: 'http',
    //     in: 'header',
    //     scheme: 'bearer',
    //     bearerFormat: 'JWT',
    //   },
    //   'Bearer',
    // )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
}
