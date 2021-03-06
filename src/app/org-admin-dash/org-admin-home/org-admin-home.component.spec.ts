import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminHomeComponent } from './org-admin-home.component';

describe('OrgAdminHomeComponent', () => {
  let component: OrgAdminHomeComponent;
  let fixture: ComponentFixture<OrgAdminHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
