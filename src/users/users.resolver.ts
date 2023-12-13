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
import { UsersService } from './users.service';

@Resolver((of) => UserModel)
export class UserResolver {
  constructor(private readonly userService: UsersService) {}

  @Query(() => [UserModel])
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.allUsers();
  }

  @Mutation(() => UserModel, { name: 'createUser' })
  async createUser(@Args('data') input: UserInputCreate): Promise<UserModel> {
    return this.userService.createUserService(input);
  }
}
