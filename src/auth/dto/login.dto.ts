// src/auth/dto/login.dto.ts
// import { IsString } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

// export class LoginDto {
//   @ApiProperty()
//   @IsString()
//   username: string;

//   @ApiProperty()
//   @IsString()
//   password: string;
// }

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}

