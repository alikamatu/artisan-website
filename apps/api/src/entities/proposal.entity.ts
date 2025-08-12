import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
import { Job } from '../jobs/job.entity';
import { User } from '../users/user.entity';
import { Booking } from '../bookings/booking.entity';

@Entity('proposals')
export class Proposal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Job, job => job.proposals)
  job: Job;

  @ManyToOne(() => User, user => user.proposals)
  worker: User;

  @Column('jsonb')
  quote: {
    amount: number;
    timeline: string;
    description: string;
  };

  @Column({
    type: 'enum',
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  })
  status: string;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // Relations
  @OneToOne(() => Booking, booking => booking.proposal)
  booking: Booking;
}