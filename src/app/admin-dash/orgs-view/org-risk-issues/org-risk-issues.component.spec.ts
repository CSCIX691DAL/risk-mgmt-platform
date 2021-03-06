import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRiskIssuesComponent } from './org-risk-issues.component';

describe('OrgRiskIssuesComponent', () => {
  let component: OrgRiskIssuesComponent;
  let fixture: ComponentFixture<OrgRiskIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgRiskIssuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRiskIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
