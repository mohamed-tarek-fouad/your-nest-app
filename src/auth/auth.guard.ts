// src/middleware/firebase-auth.middleware.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import * as admin from 'firebase-admin';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor() {}
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();

    const idToken = context
      .getArgs()[2]
      ?.req?.headers.authorization?.split('Bearer ')[1];
    if (!idToken) {
      return false;
    }

    const verified = await admin
      .auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        req.user = uid;
        console.log('Token is valid for UID:', uid);
        // Attach the decoded token to the request for future use
        //req.user = decodedToken;
        return decodedToken;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
    return verified ? true : false;
  }
}
