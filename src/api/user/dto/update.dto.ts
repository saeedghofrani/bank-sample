import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsMobilePhone } from 'class-validator';
import { UserEntity } from 'src/entities/user/user.entity';

export class CreateUserDto implements Partial<UserEntity> {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    first_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    last_name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsMobilePhone('fa-IR')
    @IsOptional()
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

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name?: string;
}