import { TestBed } from '@angular/core/testing';

import { SupabaseContactService } from './supabase-contact.service';

describe('Contact', () => {
  let service: SupabaseContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupabaseContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
