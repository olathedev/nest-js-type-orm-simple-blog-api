import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class createUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  public readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  public readonly lastName: string;

  @IsEmail()
  @IsNotEmpty()
  public readonly email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    {
      message:
        'password must be minimun 8 characters, one uppercase, one lowercase and one number',
    },
  )
  public readonly password: string;
}
