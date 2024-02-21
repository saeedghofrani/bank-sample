import { DynamicModule, Module, Provider } from '@nestjs/common';
import { PostgresConstant } from 'src/common/constants/postgres.constant';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({})
export class TypeormModule {
  static openConnection(options: DataSourceOptions): DynamicModule {
    const dataSourceCustomProvide: Provider = {
      provide: PostgresConstant,
      useFactory: async () => {
        const dataSource = new DataSource(options);
        return await dataSource.initialize();
      },
    };
    return {
      module: TypeormModule,
      providers: [dataSourceCustomProvide],
      global: true,
      exports: [dataSourceCustomProvide],
    };
  }
}
