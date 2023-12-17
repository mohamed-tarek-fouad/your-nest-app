/*
https://docs.nestjs.com/providers#services
*/
import * as admin from 'firebase-admin';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostInputCreate } from '../posts.model';
import { postSchema } from '../posts.repo';
import { PostsRepo } from '../repos/postsRepo';
import { DBActions } from 'src/types/actions';

@Injectable()
export class CreatePostService {
  async createPost(body: PostInputCreate, userId: String) {
    if (!body.Arbody && !body.Artitle && !body.Enbody && !body.Entitle)
      throw new Error('You must include at least one title or body');
    const post = await PostsRepo(DBActions.create, { ...body, userId });
    return post;
  }
}
