import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserResolver } from './users/users.resolver';

@Module({
  imports: [PostsModule, AuthModule, UsersModule],
  controllers: [],
  providers: [JwtService],
})
export class AppModule {}
