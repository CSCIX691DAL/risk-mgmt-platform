import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamW21Component } from './team-w21.component';

describe('TeamW21Component', () => {
  let component: TeamW21Component;
  let fixture: ComponentFixture<TeamW21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamW21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamW21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
