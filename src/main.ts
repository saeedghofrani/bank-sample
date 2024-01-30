import { NestFactory } from '@nestjs/core';
import { AppConfigService } from './config/app/app-config.service';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { SwaggerConfigService } from './config/swagger/swagger.service';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appService = <AppConfigService>app.get(AppConfigService);
  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix(appService.appApiPrefix);
  const appConfigService = app.get<AppConfigService>(AppConfigService);
  const swaggerConfig = app.get<SwaggerConfigService>(SwaggerConfigService);
  const port = appConfigService.appPort || 4000;
  app.setGlobalPrefix(appConfigService.appApiPrefix);
  Logger.log(`Swagger Is Enable In DEVELOPMENT Mode`, 'Swagger');
  swaggerConfig.init(app);
  await app.listen(port).then(async () => {
    Logger.log(`Running`, 'Swagger');
    Logger.log(
      `http://127.0.0.1:${port}/${appConfigService.appApiPrefix}`,
      'Running Server',
    );
    Logger.log(
      `http://127.0.0.1:${port}/${swaggerConfig.preFix}`,
      'Running Swagger',
    );
  });
}
bootstrap();