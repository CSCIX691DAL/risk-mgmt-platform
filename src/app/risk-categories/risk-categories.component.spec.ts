import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskCategoriesComponent } from './risk-categories.component';

describe('RiskCategoriesComponent', () => {
  let component: RiskCategoriesComponent;
  let fixture: ComponentFixture<RiskCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
