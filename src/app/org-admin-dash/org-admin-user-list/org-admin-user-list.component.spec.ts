import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminUserListComponent } from './org-admin-user-list.component';

describe('OrgAdminUserListComponent', () => {
  let component: OrgAdminUserListComponent;
  let fixture: ComponentFixture<OrgAdminUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
