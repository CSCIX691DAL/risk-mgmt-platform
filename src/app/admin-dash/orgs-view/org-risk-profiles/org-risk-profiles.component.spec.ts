import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRiskProfilesComponent } from './org-risk-profiles.component';

describe('OrgRiskProfilesComponent', () => {
  let component: OrgRiskProfilesComponent;
  let fixture: ComponentFixture<OrgRiskProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgRiskProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRiskProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
