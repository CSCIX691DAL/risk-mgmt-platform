import { TestBed } from '@angular/core/testing';

import { LandingServiceService } from './landing-service.service';

describe('LandingServiceService', () => {
  let service: LandingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
