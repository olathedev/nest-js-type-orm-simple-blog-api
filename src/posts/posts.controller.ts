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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';


/**
 * The PostsController class is a controller that handles requests related to posts.
 * It has a constructor that injects the PostsService class, which is used to handle the business logic.
 */
@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({ status: 200, description: "you get a 200 if the posts were retrieved successfully" })
  @Get('/:id?')
  public getAllPost(@Param('id') userId: string) {
    return this.postsService.findAll(userId);
  }

  @ApiOperation({ summary: 'Create a post' })
  @ApiResponse({ status: 201, description: "you get a 201 if the post was created successfully" })
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto);
    
    return createPostDto;
  }

  @ApiOperation({ summary: 'Update a post' })
  @ApiResponse({ status: 200, description: "you get a 200 if the post was updated successfully" })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    console.log(patchPostDto);
    
    return patchPostDto;

   }
}
