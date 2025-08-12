import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from 'src/entities/booking.entity';
import { Job } from 'src/entities/job.entity';
import { Message } from 'src/entities/message.entity';
import { Proposal } from 'src/entities/proposal.entity';
import { Review } from 'src/entities/review.entity';
import { User } from 'src/entities/user.entity';
import { WorkerProfile } from 'src/entities/worker-profile.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('DB_URL'),
        entities: [User, Booking, WorkerProfile, Job, Proposal, Review, Message],
        synchronize: false,
        ssl: { rejectUnauthorized: false },
        extra: {
          ssl: process.env.NODE_ENV === 'production',
        },
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}