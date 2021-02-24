import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePlanComponent } from './delete-plan.component';

describe('DeletePlanComponent', () => {
  let component: DeletePlanComponent;
  let fixture: ComponentFixture<DeletePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
