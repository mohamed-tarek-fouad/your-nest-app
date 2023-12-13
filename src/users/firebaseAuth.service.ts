// src/middleware/firebase-auth.middleware.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NestMiddleware,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const idToken = context
      .getArgs()[2]
      ?.req?.headers.authorization?.split('Bearer ')[1];
    if (!idToken) {
      return false;
    }

    admin
      .auth()
      .verifyIdToken('asd@gmail.com')
      .then((decodedToken) => {
        // Attach the decoded token to the request for future use
        //req.user = decodedToken;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
    return true;
  }
}
