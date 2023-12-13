import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
