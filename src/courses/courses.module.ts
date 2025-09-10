// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { CoursesService } from './courses.service';
// import { CoursesController } from './courses.controller';
// import { Course } from './entities/course.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Course])],
//   providers: [CoursesService],
//   controllers: [CoursesController],
// })
// export class CoursesModule {}

// src/courses/courses.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './course.entity';
import { ProgressModule } from '../progress/progress.module'; // 👈

@Module({
  imports: [
    TypeOrmModule.forFeature([Course]),
    ProgressModule, // 👈 This makes ProgressService + repo available here
  ],
  providers: [CoursesService],
  controllers: [CoursesController],
})
export class CoursesModule {}
