/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PostsRepo } from '../repos/postsRepo';
import { DBActions } from 'src/types/actions';

@Injectable()
export class PostByIdService {
  async getPostById(user: string, id: string) {
    const post = await PostsRepo(DBActions.getById, { user, id });
    console.log(post);
    return post;
  }
}
