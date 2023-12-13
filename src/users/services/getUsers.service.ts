import { Injectable } from '@nestjs/common';
import { getRepository } from 'fireorm';
import { User } from '../user.repo';
@Injectable()
export class UsersService {
  async allUsers() {
    const userRepository = getRepository(User);
    const mySuperuserDocument = await userRepository.find();
    return mySuperuserDocument;
  }
}
