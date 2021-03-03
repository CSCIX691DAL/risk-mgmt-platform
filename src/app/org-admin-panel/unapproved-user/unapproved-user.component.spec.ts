import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnapprovedUserComponent } from './unapproved-user.component';

describe('UnapprovedUserComponent', () => {
  let component: UnapprovedUserComponent;
  let fixture: ComponentFixture<UnapprovedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnapprovedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnapprovedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
