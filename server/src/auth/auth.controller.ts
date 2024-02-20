import { UserService } from './../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }
}
