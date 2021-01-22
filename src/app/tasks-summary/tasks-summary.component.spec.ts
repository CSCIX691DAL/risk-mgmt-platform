import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSummaryComponent } from './tasks-summary.component';

describe('TasksSummaryComponent', () => {
  let component: TasksSummaryComponent;
  let fixture: ComponentFixture<TasksSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
