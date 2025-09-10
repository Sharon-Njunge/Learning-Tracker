// import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { ApiTags } from '@nestjs/swagger';
// import { CreateUserDto } from './dto/create-user.dto';

// @ApiTags('users') // ✅ makes it appear in Swagger
// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usersService.findOne(+id);
//   }

//   @Post()
// create(@Body() userData: CreateUserDto) {
//   return this.usersService.create(userData);
// }

//   @Patch(':id')
//   update(@Param('id') id: string, @Body() userData: any) {
//     return this.usersService.update(+id, userData);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.usersService.remove(+id);
//   }
// }

// import { Body, Controller, Post } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { ApiProperty } from '@nestjs/swagger';

// class CreateUserDto {
//   @ApiProperty()
//   email: string;

//   @ApiProperty()
//   name: string;

//   @ApiProperty()
//   password: string;

//   @ApiProperty({ default: false })
//   isAdmin?: boolean;
// }

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('register')
//   async register(@Body() dto: CreateUserDto) {
//     return this.usersService.create(
//       dto.email,
//       dto.name,
//       dto.password,
//       dto.isAdmin ?? false,
//     );
//   }
// }

// import { Controller, Post, Get, Put, Delete, Param, Body } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { ApiTags } from '@nestjs/swagger';

// @ApiTags('users')
// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @Post('register')
//   create(@Body() body: { email: string; name: string; password: string; isAdmin?: boolean }) {
//     return this.usersService.create(body.email, body.name, body.password, body.isAdmin);
//   }

//   @Get()
//   findAll() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.usersService.findOneById(id);
//   }

//   @Put(':id')
//   update(@Param('id') id: number, @Body() body: Partial<{ email: string; name: string; password: string; isAdmin: boolean }>) {
//     return this.usersService.update(id, body);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number) {
//     return this.usersService.remove(id);
//   }
// }



import { Controller, Post, Get, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body.email, body.name, body.password, body.isAdmin);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }

  @Put(':id')
  @ApiBody({ type: UpdateUserDto })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserDto,
  ) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
