import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTasksItemComponent } from './org-tasks-item.component';

describe('OrgTasksItemComponent', () => {
  let component: OrgTasksItemComponent;
  let fixture: ComponentFixture<OrgTasksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTasksItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTasksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
