// // src/auth/auth.controller.ts
// import { Controller, Post, Body } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
// import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login.dto';

// @ApiTags('auth') // ✅ this tells Swagger to show it under 'auth'
// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   login(@Body() loginDto: LoginDto) {
//     return this.authService.login(loginDto);
//   }
// }

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
