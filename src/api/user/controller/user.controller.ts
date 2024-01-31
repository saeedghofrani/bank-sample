import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/create.dto';
import { UserService } from '../service/user.service';

@ApiBearerAuth('access-token')
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('all')
  @ApiOperation({ summary: 'Get All User' })
  findAllEntities() {
    return this.userService.findAllEntities();
  }

  @Post()
  @ApiOperation({ summary: 'Create User' })
  @ApiBody({ type: CreateUserDto })
  sendOtp(@Body() createEntityDto: CreateUserDto) {
    return this.userService.createEntity(createEntityDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get User By Id' })
  findOneEntity(@Query('userId') userId: string) {
    return this.userService.findOneEntity(userId);
  }
}
