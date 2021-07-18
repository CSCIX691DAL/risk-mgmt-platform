import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminApprovalItemComponent } from './org-admin-approval-item.component';

describe('OrgAdminApprovalItemComponent', () => {
  let component: OrgAdminApprovalItemComponent;
  let fixture: ComponentFixture<OrgAdminApprovalItemComponent>;
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminApprovalItemComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminApprovalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //Check to see if it is true
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
