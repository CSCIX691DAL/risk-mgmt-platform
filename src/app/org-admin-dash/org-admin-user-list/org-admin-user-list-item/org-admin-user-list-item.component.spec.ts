import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminUserListItemComponent } from './org-admin-user-list-item.component';

describe('OrgAdminUserListItemComponent', () => {
  let component: OrgAdminUserListItemComponent;
  let fixture: ComponentFixture<OrgAdminUserListItemComponent>;
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminUserListItemComponent ]
    })
    .compileComponents();
  });
  //test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminUserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
