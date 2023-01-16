import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //  validater에 도달하지 않게 함
      forbidNonWhitelisted: true, // 유효하지 않은 데이터는 request를 막음
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
