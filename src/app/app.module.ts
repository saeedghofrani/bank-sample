import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { ConfigurationModule } from 'src/config/configuration.module';
import dbConfig from 'src/config/typeorm/database';
import { TypeormModule } from 'src/config/typeorm/typeorm.module';
import { RoleModule } from 'src/api/role/role.module';

@Module({
  imports: [
    ConfigurationModule,
    TypeormModule.openConnection(dbConfig()),
    RoleModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
