import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRiskProfileComponent } from './edit-risk-profile.component';

describe('EditRiskProfileComponent', () => {
  let component: EditRiskProfileComponent;
  let fixture: ComponentFixture<EditRiskProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRiskProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRiskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
