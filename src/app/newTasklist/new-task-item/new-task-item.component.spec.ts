import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskItemComponent } from './new-task-item.component';

describe('NewTaskItemComponent', () => {
  let component: NewTaskItemComponent;
  let fixture: ComponentFixture<NewTaskItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
