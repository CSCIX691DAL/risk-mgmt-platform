import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskProfileDisplayComponent } from './risk-profile-display.component';

describe('RiskProfileDisplayComponent', () => {
  let component: RiskProfileDisplayComponent;
  let fixture: ComponentFixture<RiskProfileDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskProfileDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProfileDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
