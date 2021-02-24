import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTasklistComponent } from './new-tasklist.component';

describe('NewTasklistComponent', () => {
  let component: NewTasklistComponent;
  let fixture: ComponentFixture<NewTasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTasklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
