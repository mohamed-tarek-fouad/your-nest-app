import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { UserInputCreate } from './users.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async getAllUsers() {
    const users = await this.userService.allUsers();

    return { users };
  }

  @Post()
  async createUser(@Body() data: UserInputCreate) {
    const user = await this.userService.createUserService(data);
    return { user };
  }
}
