import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

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
  @MinLength(3, { message: '3 حروف' })
  @IsNotEmpty({ message: 'مش فاضية ' })
  @MaxLength(20, { message: 'مش اكتر من 20' })
  username: string;
  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;
}
