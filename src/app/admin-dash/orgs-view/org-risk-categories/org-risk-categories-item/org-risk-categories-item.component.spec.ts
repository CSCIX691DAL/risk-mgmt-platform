import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRiskCategoriesItemComponent } from './org-risk-categories-item.component';

describe('OrgRiskCategoriesItemComponent', () => {
  let component: OrgRiskCategoriesItemComponent;
  let fixture: ComponentFixture<OrgRiskCategoriesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgRiskCategoriesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRiskCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
