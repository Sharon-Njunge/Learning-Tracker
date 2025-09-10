// import { Body, Controller, Get, Post } from '@nestjs/common';
// import { CoursesService } from './courses.service';
// import { CreateCourseDto } from './dto/create-course.dto';

// @Controller('courses')
// export class CoursesController {
//   constructor(private readonly coursesService: CoursesService) {}

//   @Post()
//   create(@Body() createCourseDto: CreateCourseDto) {
//     return this.coursesService.create(createCourseDto);
//   }

//   @Get()
//   findAll() {
//     return this.coursesService.findAll();
//   }
// }


// src/courses/courses.controller.ts
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateCourseDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateCourseDto,
  ) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coursesService.remove(id);
  }
}

