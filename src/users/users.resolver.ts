import { Args, Query, Mutation, Resolver, Context } from '@nestjs/graphql';
import { UserModel, UserInputCreate } from './users.model';
import { CreateUserService } from './services/createUser.service';
import { UsersService } from './services/getUsers.service';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/auth.guard';
@Resolver((of) => UserModel)
export class UserResolver {
  constructor(
    private readonly userService: UsersService,
    private readonly createUserService: CreateUserService,
  ) {}
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [UserModel])
  async getAllUsers(@Context() context: any) {
    return this.userService.allUsers(context.req.user);
  }

  @Mutation(() => UserModel, { name: 'createUser' })
  async createUser(@Args('data') input: UserInputCreate) {
    return this.createUserService.createUserService(input);
  }
}
