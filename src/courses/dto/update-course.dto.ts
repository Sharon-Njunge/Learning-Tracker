import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateCourseDto {
  @ApiPropertyOptional({ example: 'NestJS for Beginners' })
  title?: string;

  @ApiPropertyOptional({ example: 'Learn NestJS step by step with examples' })
  description?: string;

  @ApiPropertyOptional({ example: true })
  isPublished?: boolean;
}
