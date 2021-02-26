import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlanItemComponent } from './treatment-plan-item.component';

describe('TreatmentPlanItemComponent', () => {
  let component: TreatmentPlanItemComponent;
  let fixture: ComponentFixture<TreatmentPlanItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentPlanItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlanItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
