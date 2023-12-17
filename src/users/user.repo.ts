import { Collection } from 'fireorm';
import * as admin from 'firebase-admin';
// @Collection()
// export class User {
//   id: string;
//   email: string;
//   username: string;
// }
export const userSchema = {
  collection: 'Users',
  fields: {
    email: 'string',
    password: 'string',
    // Add any other user fields as needed
  },
};
