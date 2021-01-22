import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskProfileItemComponent } from './risk-profile-item.component';

describe('RiskProfileItemComponent', () => {
  let component: RiskProfileItemComponent;
  let fixture: ComponentFixture<RiskProfileItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskProfileItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProfileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
