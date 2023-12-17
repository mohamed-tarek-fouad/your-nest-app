import { DBActions } from 'src/types/actions';
import { CreateUserRepo } from './createUser.repo';

export const UsersRepo = async (
  action: DBActions,

  data: object,
) => {
  switch (action) {
    case DBActions.create:
      const result = await CreateUserRepo();
      return result;
    case DBActions.update:
      console.log('Back to work.');
      break;
    case DBActions.delete:
      console.log("It's a relaxing day.");
      break;
    case DBActions.getAll:
      console.log('Back to work.');
      break;
    case DBActions.getById:
      console.log('Back to work.');
      break;
    // ... other cases ...
    default:
      console.log("It's a regular day.");
  }
};
