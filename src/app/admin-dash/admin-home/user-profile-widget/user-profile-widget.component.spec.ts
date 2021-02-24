import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileWidgetComponent } from './user-profile-widget.component';

describe('UserProfileWidgetComponent', () => {
  let component: UserProfileWidgetComponent;
  let fixture: ComponentFixture<UserProfileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
