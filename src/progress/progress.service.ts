// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Progress } from './progress.entity';

// @Injectable()
// export class ProgressService {
//   constructor(
//     @InjectRepository(Progress)
//     private progressRepo: Repository<Progress>,
//   ) {}

//   async create(userId: number, courseId: number, status: string) {
//     const progress = this.progressRepo.create({
//       user: { id: userId } as any,
//       course: { id: courseId } as any,
//       status,
//     });
//     return this.progressRepo.save(progress);
//   }

//   async findByUser(userId: number) {
//     return this.progressRepo.find({
//       where: { user: { id: userId } },
//       relations: ['course'],
//     });
//   }

//   async update(id: number, status: string) {
//     const progress = await this.progressRepo.findOne({ where: { id } });
//     if (!progress) throw new NotFoundException(`Progress with ID ${id} not found`);
//     progress.status = status;
//     return this.progressRepo.save(progress);
//   }
// }

/// src/progress/progress.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Progress } from './progress.entity';
import { User } from '../users/user.entity';
import { Course } from '../courses/course.entity';

@Injectable()
export class ProgressService {
  constructor(
    @InjectRepository(Progress)
    private progressRepo: Repository<Progress>,
  ) {}

  async create(userId: number, courseId: number, status: string) {
    const progress = this.progressRepo.create({
      user: { id: userId } as User,   // 👈 Link user by ID
      course: { id: courseId } as Course, // 👈 Link course by ID
      status,
    });
    return this.progressRepo.save(progress);
  }

  findByUser(userId: number) {
    return this.progressRepo.find({
      where: { user: { id: userId } },
      relations: ['user', 'course'],
    });
  }

}

