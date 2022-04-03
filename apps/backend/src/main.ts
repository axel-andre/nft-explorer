import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: {
    origin: 'https://3001-axelandre-nftexplorer-fxmd7if1nh3.ws-eu38.gitpod.io',
    credentials: true,
  }, });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
