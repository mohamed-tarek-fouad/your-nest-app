import { Field, Int, ObjectType, InputType, ID } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

@ObjectType()
export class PostsModel {
  @Field({ nullable: true })
  Artitle?: string;

  @Field({ nullable: true })
  Arbody?: string;

  @Field({ nullable: true })
  Entitle?: string;

  @Field({ nullable: true })
  Enbody?: string;
  @Field({ nullable: true })
  userId?: string;
  @Field({ nullable: true })
  id: string;
}

@InputType()
export class PostInputCreate {
  @Field({ nullable: true })
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  Artitle?: string;
  @IsNotEmpty()
  @Field({ nullable: true })
  @MaxLength(512)
  @IsOptional()
  Arbody?: string;
  @Field({ nullable: true })
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  Entitle?: string;
  @IsNotEmpty()
  @Field({ nullable: true })
  @MaxLength(512)
  @IsOptional()
  Enbody?: string;
}
@ObjectType()
export class PostModel {
  @Field(() => ID)
  id: string;
  @Field({ nullable: true })
  Artitle?: string;

  @Field({ nullable: true })
  Arbody?: string;

  @Field({ nullable: true })
  Entitle?: string;

  @Field({ nullable: true })
  Enbody?: string;
  @Field({ nullable: true })
  userId?: string;
}
