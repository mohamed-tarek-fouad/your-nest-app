import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() body: CreateUserDto) {
    return this.appService.createUser(body);
  }
  @Get()
  allUsers() {
    return this.appService.allUsers();
  }
}
