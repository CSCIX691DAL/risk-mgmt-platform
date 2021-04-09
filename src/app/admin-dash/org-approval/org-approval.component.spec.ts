import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgApprovalComponent } from './org-approval.component';

describe('OrgApprovalComponent', () => {
  let component: OrgApprovalComponent;
  let fixture: ComponentFixture<OrgApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
