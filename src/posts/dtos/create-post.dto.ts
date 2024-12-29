import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  isString,
  IsString,
  IsUrl,
  Matches,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { CreatePostMetaOptions } from './create-post-meta-options.dto';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: 'My Eba warming experience',
    description: 'Title of the post',
  })
  @IsString()
  title: string;

  @ApiProperty({
    enum: postType,
    description: 'possible values: post, page, story, series',
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType;

  @ApiProperty({
    example: 'my-eba-warming-experience',
    description: 'for example my-post-url',
  })
  @IsNotEmpty()
  @IsString()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'slug must be a valid slug, it should be all small leters, without spaces and can contain only hyphen as special character',
  })
  slug: string;

  @ApiProperty({
    enum: postStatus,
    description: 'possible values: draft, review, published, published',
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus;

  @ApiPropertyOptional({
    description: 'Content of the post',
    example: 'My Eba warming experience was in few creative words',
  })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiPropertyOptional({
    description:
      'Schema of the post, serialize json object else a validation error will be thrown',
    example: '{\"type\":\"object\"}}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'Featured image url of the post',
    example: 'https://my-eba-warming-experience.jpg',
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;

  @ApiPropertyOptional({
    description: 'Date the post was published',
  })
  @IsOptional()
  @IsISO8601()
  publlishOn?: Date;

  @ApiPropertyOptional({
    description: 'An aray of Tags, passed as string values',
    example: ['eba', 'food', 'warming', 'experience'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description: 'key identifier of the meta option',
          example: 'sidebar enabled',
        },
        value: {
          type: 'any',
          description: 'value of the key in the meta option',
          example: true,
        },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptions)
  metaOptions?: CreatePostMetaOptions[];
}
