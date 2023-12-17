import { Injectable } from '@nestjs/common';
import { PostsRepo } from '../repos/postsRepo';
import { DBActions } from 'src/types/actions';

@Injectable()
export class GetPostsService {
  async getPosts(user) {
    const posts = await PostsRepo(DBActions.getAll, user);
    return posts;
  }
}
