import { Module } from '@nestjs/common';
import { PostResolver } from './posts.resolver';
import { PostByIdService } from './services/postbyid.service';
import { GetPostsService } from './services/getposts.service';
import { UpdatePostService } from './services/updatepost.service';
import { CreatePostService } from './services/createpost.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [
    PostResolver,
    PostByIdService,
    GetPostsService,
    UpdatePostService,
    CreatePostService,
  ],
})
export class PostsModule {}
