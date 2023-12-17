import { Args, Query, Mutation, Resolver, Context } from '@nestjs/graphql';

import { HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/auth.guard';
import { PostInputCreate, PostModel, PostsModel } from './posts.model';
import { GetPostsService } from './services/getposts.service';
import { CreatePostService } from './services/createpost.service';
import { PostByIdService } from './services/postbyid.service';
@Resolver((of) => PostsModel)
export class PostResolver {
  constructor(
    private readonly postService: GetPostsService,
    private readonly createPostService: CreatePostService,
    private readonly getPostService: PostByIdService,
  ) {}
  @UseGuards(FirebaseAuthGuard)
  @Query(() => [PostsModel])
  async getAllPosts(@Context() context: any) {
    return this.postService.getPosts(context.req.user);
  }
  @UseGuards(FirebaseAuthGuard)
  @Mutation(() => PostsModel, { name: 'createPost' })
  async createPost(
    @Args('data') input: PostInputCreate,
    @Context() context: any,
  ) {
    try {
      return this.createPostService.createPost(input, context.req.user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  @UseGuards(FirebaseAuthGuard)
  @Query(() => PostModel)
  async getPost(@Context() context: any, @Args('id') id: string) {
    return this.getPostService.getPostById(context.req.user, id);
  }
}
