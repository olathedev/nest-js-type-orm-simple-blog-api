import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePostDto } from "./create-post.dto";
import { IsNotEmpty, IsOptional } from "class-validator";

export class PatchPostDto extends PartialType(CreatePostDto) {
    @ApiProperty({
        description: 'The id of the post to update',
        example: 1
    })
    @IsNotEmpty()
    id: number;
 }