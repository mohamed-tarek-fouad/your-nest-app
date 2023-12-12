import { Injectable } from '@nestjs/common';
import { Collection, getRepository } from 'fireorm';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import * as path from 'path';
import { User } from './fireorm/user.repo';
import serviceAccount from './test.json';
import { CreateUserDto } from './dtos/createUser.dto';
@Injectable()
export class AppService {
  constructor() {
    const serviceAccountPath = './test.json'; // Adjust the path accordingly
    const serviceAccount = require(path.resolve(__dirname, serviceAccountPath));

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    fireorm.initialize(admin.firestore()); // Initialize fireorm with Firestore instance
  }
  async createUser(body: CreateUserDto) {
    const todoRepository = getRepository(User);
    const todo = body;

    const todoDocument = await todoRepository.create(todo);
    return todoDocument;
  }
  async allUsers() {
    const todoRepository = getRepository(User);
    const mySuperTodoDocument = await todoRepository.find();
    return mySuperTodoDocument;
  }
}
