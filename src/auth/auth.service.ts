import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public async login(loginData: { email: string; password: string }) {
    // check if user exists in db by using user service as a depedency
    const userExist = await this.usersService.findOne(loginData.email);
    return { ...userExist, accessToken: 'lmaoedyrushevereywheyeye' };
  }

  public async validateUser(userId: string) {
    return true;
  }
}
