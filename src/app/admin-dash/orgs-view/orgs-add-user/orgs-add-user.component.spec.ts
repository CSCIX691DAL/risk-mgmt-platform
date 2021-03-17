import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsAddUserComponent } from './orgs-add-user.component';

describe('OrgsAddUserComponent', () => {
  let component: OrgsAddUserComponent;
  let fixture: ComponentFixture<OrgsAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgsAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgsAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
