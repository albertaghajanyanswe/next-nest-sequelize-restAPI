import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import * as express from 'express';

async function bootstrap() {
  const PORT = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(express.json({ limit: '3mb' })); // Set your desired limit (e.g., 10MB)

  setupSwagger(app);
  // app.enableCors();
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
bootstrap();
