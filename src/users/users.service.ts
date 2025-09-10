// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';

// @Injectable()
// export class UsersService {
//   private users = [];

//   create(user: CreateUserDto) {
//     this.users.push(user);
//     return { message: 'User created', user };
//   }

//   findAll() {
//     return this.users;
//   }

//   findOne(id: number) {
//     return this.users[id] || null;
//   }

//   update(id: number, user: any) {
//     this.users[id] = { ...this.users[id], ...user };
//     return { message: 'User updated', user: this.users[id] };
//   }

//   remove(id: number) {
//     const removed = this.users.splice(id, 1);
//     return { message: 'User removed', removed };
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Ensure no conflicting imports or variables named 'number' exist
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // Method removed to avoid duplication
  constructor(
    @InjectRepository(User) private usersRepo: Repository<User>,
  ) {}

  async create(email: string, name: string, password: string, isAdmin = false) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({
      email,
      name,
      password: hashedPassword,
      isAdmin,
    });
    return this.usersRepo.save(user);
  }

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }

  async findAll() {
    return this.usersRepo.find();
  }

  async findOneById(id: number) {
    return this.usersRepo.findOne({ where: { id } });
  }

  async update(id: number, data: UpdateUserDto) {
    if (!data || Object.keys(data).length === 0) {
      throw new Error('No update data provided');
    }
  
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
  
    await this.usersRepo.update(id, data);
    return this.findOneById(id);
  }

  async remove(id: number) {
    return this.usersRepo.delete(id);
  }
}

