import {
  Int,
  Args,
  Parent,
  Query,
  Mutation,
  Resolver,
  ResolveField,
} from '@nestjs/graphql';
import { UserModel, UserInputCreate } from './users.model';
import { CreateUserService } from './services/createUser.service';
import { UsersService } from './services/getUsers.service';
import { MiddlewareConsumer, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from './firebaseAuth.service';
@Resolver((of) => UserModel)
export class UserResolver {
  constructor(
    private readonly userService: UsersService,
    private readonly createUserService: CreateUserService,
  ) {}
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [UserModel])
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.allUsers();
  }

  @Mutation(() => UserModel, { name: 'createUser' })
  async createUser(@Args('data') input: UserInputCreate): Promise<UserModel> {
    return this.createUserService.createUserService(input);
  }
}
