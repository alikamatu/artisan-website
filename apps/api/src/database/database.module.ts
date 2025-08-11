import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url: config.get('DB_URL'),
        entities: [User],
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