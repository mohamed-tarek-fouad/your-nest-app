import { DBActions } from 'src/types/actions';
import { PostsRepo } from './posts/repos/postsRepo';
import { UsersRepo } from './users/repos/usersRepo';

export const Repo = async (
  action: DBActions,
  collection: string,
  data: object,
) => {
  switch (collection) {
    case 'Posts':
      await PostsRepo(action, data);
      break;
    case 'Users':
      await UsersRepo(action, data);
      break;
    // ... other cases ...
    default:
      console.log('default');
  }
};
