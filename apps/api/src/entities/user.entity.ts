import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', enum: ['client', 'worker', 'admin'] })
  role: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text' })
  phone: string;

  @Column({ type: 'int', default: 0 })
  verification_level: number;

  @BeforeInsert()
  setDefaults() {
    this.verification_level = this.verification_level || 0;
  }
}