import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { UserRepository } from './repository/user.repository';
import { RoleModule } from '../role/role.module';

@Module({
    controllers: [UserController, RoleModule],
    providers: [UserService, UserRepository],
    exports: [UserService],
})
export class UserModule { }
