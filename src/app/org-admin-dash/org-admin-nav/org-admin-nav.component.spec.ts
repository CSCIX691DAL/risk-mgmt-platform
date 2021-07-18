import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminNavComponent } from './org-admin-nav.component';

describe('OrgAdminNavComponent', () => {
  let component: OrgAdminNavComponent;
  let fixture: ComponentFixture<OrgAdminNavComponent>;
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminNavComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
