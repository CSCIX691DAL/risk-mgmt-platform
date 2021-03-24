import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgUsersItemComponent } from './org-users-item.component';

describe('OrgUsersItemComponent', () => {
  let component: OrgUsersItemComponent;
  let fixture: ComponentFixture<OrgUsersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgUsersItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgUsersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
