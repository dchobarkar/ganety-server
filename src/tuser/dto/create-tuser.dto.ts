import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsUrl,
  IsMobilePhone,
  MaxLength,
  Length,
} from 'class-validator';
import { Index } from 'typeorm';

export class CreateTuserDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  classname: string;

  @IsString()
  intro: string;

  @IsNotEmpty()
  @IsMobilePhone('any')
  @Length(10)
  @Index({ unique: true })
  mobile: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  @Index({ unique: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(90)
  address: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  city: string;

  @IsNotEmpty()
  pincode: number;

  @IsString()
  @IsUrl()
  bannerimgurl: string;

  @IsNotEmpty()
  // @IsInt()
  // @Min(0)
  // @Max(195)
  country_id;

  @IsNotEmpty()
  // @IsInt()
  // @Min(0)
  // @Max(195)
  state_id;
}
