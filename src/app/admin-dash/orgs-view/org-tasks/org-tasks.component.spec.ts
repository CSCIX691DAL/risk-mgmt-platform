import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTasksComponent } from './org-tasks.component';

describe('OrgTasksComponent', () => {
  let component: OrgTasksComponent;
  let fixture: ComponentFixture<OrgTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
