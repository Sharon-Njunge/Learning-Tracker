import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ unique: true })
  email: string;

  @ApiProperty()
  @Column()
  name: string;

  @Column()
  password: string; // 🔒 No @ApiProperty for security

  @ApiProperty({ default: false })
  @Column({ default: false })
  isAdmin: boolean;
    courses: any;
}

// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
// import { ApiProperty } from '@nestjs/swagger';

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @ApiProperty()
//   @Column({ unique: true })
//   username: string;

//   @ApiProperty()
//   @Column()
//   password: string; // Will store hashed password
// }

