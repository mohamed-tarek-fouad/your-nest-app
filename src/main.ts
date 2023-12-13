import { NestFactory } from '@nestjs/core';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as fireorm from 'fireorm';
import * as path from 'path';
import serviceAccount from './config/test.json'; //🔴DO NOT DELTEEEEEEEEEEEEEEEEEE
import { HttpExceptionFilter } from './error/customError';
const server: express.Express = express();
export const createNestServer = async (expressInstance: express.Express) => {
  const adapter = new ExpressAdapter(expressInstance);
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    adapter,
    {},
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  const serviceAccountPath = './config/test.json';
  const serviceAccount = require(path.resolve(__dirname, serviceAccountPath));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  fireorm.initialize(admin.firestore()); // Initialize fireorm with Firestore instance

  app.enableCors();
  return app.init();
};
createNestServer(server)
  .then((v) => console.log('Nest Ready'))
  .catch((err) => console.error('Nest broken', err));

export const api: functions.HttpsFunction = functions.https.onRequest(server);
