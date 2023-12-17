import { DBActions } from 'src/types/actions';
import { CreatePostRepo } from './createPost.repo';
import { GetPostsRepo } from './getPosts.repo';
import { GetPostByIdRepo } from './getPostById.repo';

export const PostsRepo = async (
  action: DBActions,

  data: object,
) => {
  switch (action) {
    case DBActions.create:
      const createdResult = await CreatePostRepo(data);
      return createdResult;
    case DBActions.update:
      console.log('Back to work.');
      break;
    case DBActions.delete:
      console.log("It's a relaxing day.");
      break;
    case DBActions.getAll:
      const getResults = await GetPostsRepo(data);
      return getResults;
    case DBActions.getById:
      const postById = await GetPostByIdRepo(data);
      return postById;
    // ... other cases ...
    default:
      console.log("It's a regular day.");
  }
};
