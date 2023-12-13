import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CreateUserService } from './services/createUser.service';
import { UsersService } from './services/getUsers.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with your secret key
    }),
  ],
  controllers: [],
  providers: [CreateUserService, UserResolver, UsersService],
})
export class UsersModule {}
