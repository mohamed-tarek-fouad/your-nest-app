import { FirebaseAuthGuard } from './auth.guard';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [FirebaseAuthGuard],
})
export class AuthModule {}
