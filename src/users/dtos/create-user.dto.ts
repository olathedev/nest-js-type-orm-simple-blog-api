import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  maxLength,
  MinLength,
} from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  public readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  public readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(96)
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(96)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must be minimun 8 characters, one uppercase, one lowercase and one number',
    },
  )
  public readonly password: string;
}
