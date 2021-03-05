import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRiskCategoriesComponent } from './org-risk-categories.component';

describe('OrgRiskCategoriesComponent', () => {
  let component: OrgRiskCategoriesComponent;
  let fixture: ComponentFixture<OrgRiskCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgRiskCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRiskCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
