import { Injectable } from '@nestjs/common';
import { Collection, getRepository } from 'fireorm';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import * as path from 'path';
import { User } from './user.repo';
import serviceAccount from '../test.json';
import { CreateUserDto } from './dtos/createUser.dto';
@Injectable()
export class UsersService {
  constructor() {
    const serviceAccountPath = '../test.json'; // Adjust the path accordingly
    const serviceAccount = require(path.resolve(__dirname, serviceAccountPath));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    fireorm.initialize(admin.firestore()); // Initialize fireorm with Firestore instance
  }
  async createUserService(body: CreateUserDto) {
    const userRepository = getRepository(User);
    const userDocument = await userRepository.create({
      email: body.email,
      username: body.username,
    });
    return userDocument;
  }
  async allUsers() {
    const userRepository = getRepository(User);
    const mySuperuserDocument = await userRepository.find();
    return mySuperuserDocument;
  }
}
