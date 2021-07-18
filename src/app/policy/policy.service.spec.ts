import { TestBed } from '@angular/core/testing';

import { PolicyService } from './policy.service';

describe('PolicyService', () => {
  let service: PolicyService;

  //Test the policy
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicyService);
  });
  //check to make sure it is true
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
