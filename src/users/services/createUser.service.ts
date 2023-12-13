import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { getRepository, runTransaction } from 'fireorm';
import { User } from '../user.repo';
import { JwtService } from '@nestjs/jwt';
import { TransactionRepository } from 'fireorm/lib/src/Transaction/BaseFirestoreTransactionRepository';
import { UserInputCreate } from '../users.model';
import * as admin from 'firebase-admin';
@Injectable()
export class CreateUserService {
  constructor(private readonly jwtService: JwtService) {}
  async createUserService(body: UserInputCreate) {
    const userRepository = getRepository(User);
    const userTransaction = await runTransaction(async (tx) => {
      const x = await admin
        .auth()
        .createUser({ email: body.email, password: body.username });
      this.jwtService.sign({ id: x.uid, name: x.displayName });
      console.log(x);
      const validateEmail = await userRepository
        .whereEqualTo((user) => user.email, body.email)
        .findOne();
      if (validateEmail)
        throw new HttpException('email already exist', HttpStatus.BAD_REQUEST);
      const userDocument = await userRepository.create({
        email: body.email,
        username: body.username,
      });
      return userDocument;
    });

    return userTransaction;
  }
}
