import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamF20Component } from './team-f20.component';

describe('TeamF20Component', () => {
  let component: TeamF20Component;
  let fixture: ComponentFixture<TeamF20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamF20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamF20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
