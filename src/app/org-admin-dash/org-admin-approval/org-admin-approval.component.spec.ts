import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminApprovalComponent } from './org-admin-approval.component';

describe('OrgAdminApprovalComponent', () => {
  let component: OrgAdminApprovalComponent;
  let fixture: ComponentFixture<OrgAdminApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
