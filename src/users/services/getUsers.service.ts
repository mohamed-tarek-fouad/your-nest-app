import { ExecutionContext, Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { userSchema } from '../user.repo';
@Injectable()
export class UsersService {
  async allUsers(user) {
    console.log(user);
    // const userRepository = getRepository(User);
    const mySuperuserDocument = await admin
      .firestore()
      .collection(userSchema.collection)
      .get();
    const users = [];
    mySuperuserDocument.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });

    return users;
  }
}
