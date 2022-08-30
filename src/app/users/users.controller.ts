import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UserService } from './users.service';

@Controller('api/v1/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  async signup(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }
}
