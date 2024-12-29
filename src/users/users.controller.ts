import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { createUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDtop } from './dtos/get-users-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetch a list of registered users on the application',
  })
  @ApiResponse({
    status: 200,
    description: 'users fetched successfully',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'Limit of users per page',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The page you want the api to return based on a pagination flow',
    example: 1,
  })
  public getUsers(
    @Param() getUsersParamsDtop: GetUsersParamsDtop,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    if (getUsersParamsDtop.id) {
      return this.userService.findOne('1');
    }
    return this.userService.findAll(getUsersParamsDtop, limit, page);
  }

  @Post()
  public createUser(@Body() body: createUserDto): string {
    console.log(body instanceof createUserDto);
    return 'User creation endpoint';
  }

  @Patch()
  public updateUser(@Body() updateUserDto: UpdateUserDto) {
    return updateUserDto;
  }
}
