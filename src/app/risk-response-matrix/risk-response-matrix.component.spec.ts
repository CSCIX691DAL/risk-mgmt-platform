import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskResponseMatrixComponent } from './risk-response-matrix.component';

describe('RiskResponseMatrixComponent', () => {
  let component: RiskResponseMatrixComponent;
  let fixture: ComponentFixture<RiskResponseMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskResponseMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskResponseMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
