import { UserEntity } from 'src/entities/user/user.entity';

export class CreateUserDto implements Partial<UserEntity> {
  first_name?: string;
  last_name?: string;
  mobile?: string;
  name?: string;
  password?: string;
  username?: string;
}
