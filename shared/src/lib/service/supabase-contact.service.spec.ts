import { TestBed } from '@angular/core/testing';
import { SupabaseContactService } from './supabase-contact.service';
import {HttpClientModule} from "@angular/common/http";

describe('Contact', () => {
  let service: SupabaseContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],

    });
    service = TestBed.inject(SupabaseContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
