import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTreatmentPlanComponent } from './add-treatment-plan.component';

describe('AddTreatmentPlanComponent', () => {
  let component: AddTreatmentPlanComponent;
  let fixture: ComponentFixture<AddTreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTreatmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
