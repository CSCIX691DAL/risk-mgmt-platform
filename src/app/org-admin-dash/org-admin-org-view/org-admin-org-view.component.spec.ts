import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminOrgViewComponent } from './org-admin-org-view.component';

describe('OrgAdminOrgViewComponent', () => {
  let component: OrgAdminOrgViewComponent;
  let fixture: ComponentFixture<OrgAdminOrgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminOrgViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminOrgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
