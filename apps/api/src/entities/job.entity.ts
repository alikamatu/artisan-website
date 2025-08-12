import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, Index } from 'typeorm';
import { Point } from 'geojson';
import { User } from './user.entity';
import { Proposal } from './proposal.entity';
import { Booking } from './booking.entity';

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, user => user.jobs)
  client: User;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column()
  category: string;

  @Column('geography', {
    spatialFeatureType: 'Point',
    srid: 4326
  })
  @Index({ spatial: true })
  location: Point;

  @Column('int', { name: 'budget_min' })
  budgetMin: number;

  @Column('int', { name: 'budget_max' })
  budgetMax: number;

  @Column({
    type: 'enum',
    enum: ['open', 'awarded', 'in_progress', 'completed', 'cancelled'],
    default: 'open'
  })
  status: string;

  @Column({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  // Relations
  @OneToMany(() => Proposal, proposal => proposal.job)
  proposals: Proposal[];

  @OneToOne(() => Booking, booking => booking.job)
  booking: Booking;
}