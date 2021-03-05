import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRiskProfilesItemComponent } from './org-risk-profiles-item.component';

describe('OrgRiskProfilesItemComponent', () => {
  let component: OrgRiskProfilesItemComponent;
  let fixture: ComponentFixture<OrgRiskProfilesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgRiskProfilesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRiskProfilesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
