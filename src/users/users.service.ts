import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { GetUsersParamsDtop } from './dtos/get-users-param.dto';
import { AuthService } from 'src/auth/auth.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

/**
 * class to connect users table and perform business logic
 */
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  /**
   * method to get all users
   * @param getUsersParamsDtop
   * @param limit
   * @param page
   * @returns
   */
  public async findAll(
    getUsersParamsDtop: GetUsersParamsDtop,
    limit: number,
    page: number,
  ) {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 30,
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        age: 25,
      },
      {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        age: 28,
      },
    ];
  }

  public async findOne(id: string) {
    const validateUser = await this.authService.validateUser(id);
    console.log(validateUser);

    if (!validateUser) {
      throw new ForbiddenException('User not allowed to view this resource');
    }
    return {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 28,
    };
  }
}
