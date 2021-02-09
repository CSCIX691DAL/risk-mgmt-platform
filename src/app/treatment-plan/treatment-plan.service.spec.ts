import { TestBed } from '@angular/core/testing';

import { TreatmentPlanService } from './treatment-plan.service';

describe('TreatmentPlanService', () => {
  let service: TreatmentPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
