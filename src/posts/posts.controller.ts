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
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:id?')
  public getAllPost(@Param('id') userId: string) {
    return this.postsService.findAll(userId);
  }

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    
    return createPostDto;
  }
}
