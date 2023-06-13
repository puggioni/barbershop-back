import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt, IsEmail, IsUrl } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsInt()
  phoneNumber: number;

  @ApiProperty()
  googleAccount: boolean;

  @ApiProperty()
  @IsString()
  secret: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty()
  @IsString()
  profileImage: string;

  @ApiProperty()
  @IsUrl()
  @IsNotEmpty()
  password: string;

  autenticated: boolean;

  favoriteProducts: string[];
}
