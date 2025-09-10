// import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';

// export class UpdateUserDto extends PartialType(CreateUserDto) {}



// src/users/dto/update-user.dto.ts
// import { ApiPropertyOptional } from '@nestjs/swagger';

// export class UpdateUserDto {
//   @ApiPropertyOptional({ example: 'newemail@example.com' })
//   email?: string;

//   @ApiPropertyOptional({ example: 'New Name' })
//   name?: string;

//   @ApiPropertyOptional({ example: 'newStrongPassword123!' })
//   password?: string;

//   @ApiPropertyOptional({ example: true })
//   isAdmin?: boolean;
// }


import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'john@example.com' })
  email?: string;

  @ApiPropertyOptional({ example: 'John Doe' })
  name?: string;

  @ApiPropertyOptional({ example: 'newpassword123' })
  password?: string;

  @ApiPropertyOptional({ example: true })
  isAdmin?: boolean;
}
