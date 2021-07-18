import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminDashComponent } from './org-admin-dash.component';

describe('OrgAdminDashComponent', () => {
  let component: OrgAdminDashComponent;
  let fixture: ComponentFixture<OrgAdminDashComponent>;
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminDashComponent ]
    })
    .compileComponents();
  });
  //test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
