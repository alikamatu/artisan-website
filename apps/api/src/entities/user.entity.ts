import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from 'typeorm';
import { WorkerProfile } from './worker-profile.entity';
import { Job } from './job.entity';
import { Proposal } from './proposal.entity';
import { Booking } from './booking.entity';
import { Message } from './message.entity';
import { Review } from './review.entity';

@Entity('user_profile')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ 
    type: 'enum', 
    enum: ['client', 'worker', 'admin'],
    default: 'client'
  })
  role: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  region: string;

  @Column('jsonb', { nullable: true })
  metadata: Record<string, any>;

  @Column({ name: 'verification_level', default: 0 })
  verificationLevel: number;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  // Relations
  @OneToOne(() => WorkerProfile, profile => profile.user)
  workerProfile: WorkerProfile;

  @OneToMany(() => Job, job => job.client)
  jobs: Job[];

  @OneToMany(() => Proposal, proposal => proposal.worker)
  proposals: Proposal[];

  @OneToMany(() => Booking, booking => booking.client)
  clientBookings: Booking[];

  @OneToMany(() => Booking, booking => booking.worker)
  workerBookings: Booking[];

  @OneToMany(() => Message, message => message.fromUser)
  sentMessages: Message[];

  @OneToMany(() => Message, message => message.toUser)
  receivedMessages: Message[];

  @OneToMany(() => Review, review => review.reviewer)
  reviewsGiven: Review[];

  @OneToMany(() => Review, review => review.subject)
  reviewsReceived: Review[];
}