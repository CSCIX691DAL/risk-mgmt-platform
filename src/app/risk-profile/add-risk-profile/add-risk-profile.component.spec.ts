import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskProfileComponent } from './add-risk-profile.component';

describe('AddRiskProfileComponent', () => {
  let component: AddRiskProfileComponent;
  let fixture: ComponentFixture<AddRiskProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiskProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
