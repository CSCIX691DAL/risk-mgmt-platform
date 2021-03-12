import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTreatmentPlanComponent } from './edit-treatment-plan.component';

describe('EditTreatmentPlanComponent', () => {
  let component: EditTreatmentPlanComponent;
  let fixture: ComponentFixture<EditTreatmentPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTreatmentPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTreatmentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
