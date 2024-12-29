import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(private readonly usersService: UsersService) {}
  public async findAll(userId: string) {
    const user = await this.usersService.findOne(userId);
    console.log(user);
    return [
      { id: 'order1', userId, item: 'Laptop', user },
      { id: 'order2', userId, item: 'Phone', user }, 
    ];
  }

  public async createPost(body: any) {
    return body;
  }
}
