import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  public login(@Body() loginData: any) {
    console.log(loginData);

    return this.authService.login(loginData);
  }
}
 