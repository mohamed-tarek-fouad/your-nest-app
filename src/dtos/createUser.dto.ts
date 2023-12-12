/* eslint-disable prettier/prettier */
import {
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

export class CreateUserDto {
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(20)
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
