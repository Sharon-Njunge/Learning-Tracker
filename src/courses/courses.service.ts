// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Course } from './entities/course.entity';
// import { CreateCourseDto } from './dto/create-course.dto';

// @Injectable()
// export class CoursesService {
//   constructor(
//     @InjectRepository(Course)
//     private courseRepo: Repository<Course>,
//   ) {}

//   create(dto: CreateCourseDto) {
//     const course = this.courseRepo.create(dto);
//     return this.courseRepo.save(course);
//   }

//   findAll() {
//     return this.courseRepo.find();
//   }
// }

// src/courses/courses.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Injectable()
export class CoursesService {
  findOneById: any;
  constructor(
    @InjectRepository(Course)
    private coursesRepo: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = this.coursesRepo.create(createCourseDto);
    return this.coursesRepo.save(course);
  }

  async findAll() {
    return this.coursesRepo.find();
  }

  async findOne(id: number) {
    const course = await this.coursesRepo.findOne({ where: { id } });
    if (!course) throw new NotFoundException(`Course with ID ${id} not found`);
    return course;
  }

  async update(id: number, data: UpdateCourseDto) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('No update data provided');
    }
  
    await this.coursesRepo.update(id, data);
    return this.findOneById(id);
  }

  async remove(id: number) {
    const course = await this.findOne(id);
    return this.coursesRepo.remove(course);
  }
}
