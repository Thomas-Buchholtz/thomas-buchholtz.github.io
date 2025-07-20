import { HttpClient, HttpHeaders } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupabaseContactService {
  private http = inject(HttpClient);
  private supabaseUrl = 'https://rzyafldvyrqyczfaxdxi.supabase.co';
  private supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6eWFmbGR2eXJxeWN6ZmF4ZHhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI0MzkwNzgsImV4cCI6MjA2ODAxNTA3OH0.9A6NgG9pPefo4istgP6XvQkPGeymPlqILOPwaatMYA4';
  private table = 'contacts';

  sendContactMessage(name: string, email: string, message: string) {
    const headers = new HttpHeaders({
      apikey: this.supabaseKey,
      Authorization: `Bearer ${this.supabaseKey}`,
      'Content-Type': 'application/json',
    });

    const body = {
      name,
      email,
      message,
    };

    return this.http.post(`${this.supabaseUrl}/rest/v1/${this.table}`, body, {
      headers,
    });
  }
}
