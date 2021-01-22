import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskProfileMapComponent } from './risk-profile-map.component';

describe('RiskProfileMapComponent', () => {
  let component: RiskProfileMapComponent;
  let fixture: ComponentFixture<RiskProfileMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskProfileMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProfileMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
