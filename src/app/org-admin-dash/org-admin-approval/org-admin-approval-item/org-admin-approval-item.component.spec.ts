import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminApprovalItemComponent } from './org-admin-approval-item.component';

describe('OrgAdminApprovalItemComponent', () => {
  let component: OrgAdminApprovalItemComponent;
  let fixture: ComponentFixture<OrgAdminApprovalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminApprovalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminApprovalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
