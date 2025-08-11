import { Module, Global } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';

@Global()
@Module({
  providers: [
    {
      provide: 'SUPABASE_CLIENT',
      useFactory: (config: ConfigService) => {
        return createClient(
          config.get<string>('SUPABASE_URL')!,
          config.get<string>('SUPABASE_KEY')!,
          {
            auth: {
              persistSession: false,
              autoRefreshToken: false,
            },
          }
        );
      },
      inject: [ConfigService],
    },
  ],
  exports: ['SUPABASE_CLIENT'],
})
export class SupabaseModule {}