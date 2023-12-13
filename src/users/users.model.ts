import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field()
  id: string;
  @Field()
  username: string;
  @Field()
  email: string;
}

@InputType()
export class UserInputCreate {
  @Field()
  username: string;

  @Field()
  email: string;
}
