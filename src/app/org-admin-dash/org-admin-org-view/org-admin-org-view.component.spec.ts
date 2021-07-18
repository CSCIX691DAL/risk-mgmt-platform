import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminOrgViewComponent } from './org-admin-org-view.component';

describe('OrgAdminOrgViewComponent', () => {
  let component: OrgAdminOrgViewComponent;
  let fixture: ComponentFixture<OrgAdminOrgViewComponent>;
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminOrgViewComponent ]
    })
    .compileComponents();
  });
  //test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminOrgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
