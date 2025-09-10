// // src/auth/auth.module.ts
// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { JwtStrategy } from './jwt.strategy';

// @Module({
//   imports: [
//     PassportModule,
//     JwtModule.register({
//       secret: 'mySuperSecretKey', // Use env variable in real projects
//       signOptions: { expiresIn: '1h' },
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy],
// })
// export class AuthModule {}


import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module'; // 👈 import UsersModule

@Module({
  imports: [
    UsersModule, // 👈 this makes UsersService available here
    JwtModule.register({
      secret: 'your_secret_key', // Use process.env in production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
