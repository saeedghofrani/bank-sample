import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfiguration from './app/app-configuration';
import postgresConfiguration from './postgres/postgres.configuration';
import swaggerConfiguration from './swagger/swagger.configuration';
import { AppConfigService } from './app/app-config.service';
import { SwaggerConfigService } from './swagger/swagger.service';
import jwtConfiguration from './jwt/jwt-configuration';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      cache: true,
      load: [
        appConfiguration,
        postgresConfiguration,
        swaggerConfiguration,
        jwtConfiguration,
      ],
    }),
  ],
  providers: [AppConfigService, SwaggerConfigService],
  exports: [AppConfigService, SwaggerConfigService],
})
export class ConfigurationModule { }
