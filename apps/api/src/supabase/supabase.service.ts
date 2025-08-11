import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  constructor(
    @Inject('SUPABASE_CLIENT') private supabase: SupabaseClient
  ) {}

  getRealtimeChannel(bookingId: string) {
    return this.supabase.channel(`booking:${bookingId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'bookings',
          filter: `id=eq.${bookingId}`,
        },
        (payload) => payload.new
      )
      .subscribe();
  }

  async verifyDocument(url: string): Promise<number> {
    const { data, error } = await this.supabase.rpc('verify_document', {
      doc_url: url,
    });
    if (error) throw new Error(error.message);
    return data.verification_level;
  }
}