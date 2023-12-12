import { Collection } from 'fireorm';

@Collection()
export class User {
  id: string;
  email: string;
  username: string;
}
