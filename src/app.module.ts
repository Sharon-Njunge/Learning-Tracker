// // src/app.module.ts
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
// import { CoursesModule } from './courses/courses.module';
// import { ProgressService } from './progress/progress.service';
// import { ProgressController } from './progress/progress.controller';
// import { ProgressModule } from './progress/progress.module';

// @Module({
//   imports: [
//     // Load environment variables
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),

//     // Configure TypeORM with values from .env
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get('DB_HOST'),
//         port: parseInt(configService.get('DB_PORT', '5432')),
//         username: configService.get('DB_USERNAME'),
//         password: configService.get('DB_PASSWORD'),
//         database: configService.get('DB_NAME'),
//         synchronize: true,
//         autoLoadEntities: true,
//       }),
//     }),

//     UsersModule,
//     AuthModule,
//     CoursesModule,
//     ProgressModule,
//   ],

//   // providers: [ProgressService],
//   // controllers: [ProgressController],
// })
// export class AppModule {}

// Second version
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { CoursesModule } from './courses/courses.module';
// import { ProgressModule } from './progress/progress.module'; // 👈 Add this
// import { User } from './users/user.entity';
// import { Course } from './courses/course.entity';
// import { Progress } from './progress/progress.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       database: 'learning.db',
//       entities: [User, Course, Progress],
//       synchronize: true,
//     }),
//     UsersModule,
//     CoursesModule,
//     ProgressModule, // 👈 And here
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// Third Version
// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [
    // Load environment variables globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database configuration
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const requiredVars = [
          'DB_HOST',
          'DB_PORT',
          'DB_USERNAME',
          'DB_PASSWORD',
          'DB_NAME',
        ];

        // Check if all required vars exist
        requiredVars.forEach((key) => {
          const value = configService.get<string>(key);
          if (!value) {
            throw new Error(`❌ Missing required environment variable: ${key}`);
          }
        });

        return {
          type: 'postgres',
          host: configService.get<string>('DB_HOST'),
          port: parseInt(configService.get<string>('DB_PORT'), 10),
          username: configService.get<string>('DB_USERNAME'),
          password: String(configService.get<string>('DB_PASSWORD')), // Always a string
          database: configService.get<string>('DB_NAME'),
          synchronize: true, // ❗ Set to false in production
          autoLoadEntities: true,
        };
      },
    }),

    UsersModule,
    AuthModule,
    CoursesModule,
    ProgressModule,
  ],
})
export class AppModule {}
