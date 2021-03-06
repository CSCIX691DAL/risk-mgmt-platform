import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRiskIssuesItemComponent } from './org-risk-issues-item.component';

describe('OrgRiskIssuesItemComponent', () => {
  let component: OrgRiskIssuesItemComponent;
  let fixture: ComponentFixture<OrgRiskIssuesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgRiskIssuesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRiskIssuesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
