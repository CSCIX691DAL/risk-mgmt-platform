import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgApprovalItemComponent } from './org-approval-item.component';

describe('OrgApprovalItemComponent', () => {
  let component: OrgApprovalItemComponent;
  let fixture: ComponentFixture<OrgApprovalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgApprovalItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgApprovalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
