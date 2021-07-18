import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminApprovalComponent } from './org-admin-approval.component';

describe('OrgAdminApprovalComponent', () => {
  let component: OrgAdminApprovalComponent;
  let fixture: ComponentFixture<OrgAdminApprovalComponent>;
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminApprovalComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //Check to see if it is true
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
