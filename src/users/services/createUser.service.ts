import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { runTransaction } from 'fireorm';
import { userSchema } from '../user.repo';
import { UserInputCreate } from '../users.model';
import * as admin from 'firebase-admin';
import * as uuid from 'uuid';
@Injectable()
export class CreateUserService {
  constructor() {}
  async createUserService(body: UserInputCreate) {
    const userTransaction = await runTransaction(async (tx) => {
      // const user = tx.getRepository(User);

      // const token = await admin
      //   .auth()
      //   .createCustomToken('DBdxRfq9qXWWhH61HLw2XD60IKk1');
      // console.log('token', token);
      const validateEmail = await admin
        .firestore()
        .collection(userSchema.collection)
        .where('email', '==', body.email)
        .get();
      console.log(validateEmail.docs[0]);
      if (validateEmail.docs[0])
        throw new HttpException('email already exist', HttpStatus.BAD_REQUEST);
      const x = await admin
        .auth()
        .createUser({ email: body.email, password: body.password });
      const userDocumentId = await admin
        .firestore()
        .collection(userSchema.collection)
        .add({ email: body.email, password: body.password });
      const userDocument = (await userDocumentId.get()).data();
      return { ...userDocument, id: userDocumentId.id };
    });

    return userTransaction;
  }
}
