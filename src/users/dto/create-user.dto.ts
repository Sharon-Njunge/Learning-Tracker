// import { ApiProperty } from '@nestjs/swagger';

// export class CreateUserDto {
//   @ApiProperty()
//   name: string;

//   @ApiProperty()
//   email: string;

//   @ApiProperty()
//   password: string;
// }

// import { IsString, IsEmail, IsOptional } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

// export class CreateUserDto {
//   @ApiProperty({ example: 'John Doe' })
//   @IsString()
//   name: string;

//   @ApiProperty({ example: 'john@example.com' })
//   @IsEmail()
//   email: string;

//   @ApiProperty({ example: 'Software Developer', required: false })
//   @IsOptional()
//   @IsString()
//   bio?: string;
// }


// src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 'password123' })
  password: string;

  @ApiProperty({ example: false, required: false })
  isAdmin?: boolean;
}

