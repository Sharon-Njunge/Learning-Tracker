// src/progress/progress.controller.ts
import { Controller, Post, Get,  Param, Body } from '@nestjs/common';
import { ProgressService } from './progress.service';

@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Post()
  create(@Body() body: { userId: number; courseId: number; status: string }) {
    const { userId, courseId, status } = body;
    return this.progressService.create(userId, courseId, status);
  }

  @Get(':userId')
  findByUser(@Param('userId') userId: number) {
    return this.progressService.findByUser(userId);
  }

}
