import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminUserListItemComponent } from './org-admin-user-list-item.component';

describe('OrgAdminUserListItemComponent', () => {
  let component: OrgAdminUserListItemComponent;
  let fixture: ComponentFixture<OrgAdminUserListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminUserListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminUserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
