import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import * as express from 'express';
import { exec } from 'child_process';

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
  await runMigrations();
}
async function runMigrations() {
  try {
    // await migrationService.runMigrations();
    await new Promise<void>((resolve, reject) => {
      exec('npx sequelize-cli db:migrate --env test', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error running migrations: ${error.message}`);
          reject(error);
          return;
        }
        console.log('Migrations executed successfully.');
        resolve();
      });
    });
  } catch (error) {
    // Handle migration error
    console.error('Migration error:', error);
  }
}
bootstrap();
