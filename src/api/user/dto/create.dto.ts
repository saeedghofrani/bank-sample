import { ApiProperty } from '@nestjs/swagger';
import { IsMobilePhone, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { UserEntity } from 'src/entities/user/user.entity';

export class CreateUserDto implements Partial<UserEntity> {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  last_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsMobilePhone('fa-IR')
  mobile: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  username?: string;
}
