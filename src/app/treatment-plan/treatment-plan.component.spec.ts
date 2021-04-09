import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlanComponent } from './treatment-plan.component';

describe('TreatmentPlanComponent', () => {
  let component: TreatmentPlanComponent;
  let fixture: ComponentFixture<TreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
