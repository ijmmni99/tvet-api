import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';


dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = new DocumentBuilder()
    .setTitle('TVET API')
    .setDescription('Api to retrive SQL Server Database')
    .setVersion('1.0.0')
    .build()

    // const document = SwaggerModule.createDocument(app, config);

    // SwaggerModule.setup('/', app, document);
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
