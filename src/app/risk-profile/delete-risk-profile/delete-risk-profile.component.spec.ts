import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRiskProfileComponent } from './delete-risk-profile.component';

describe('DeleteRiskProfileComponent', () => {
  let component: DeleteRiskProfileComponent;
  let fixture: ComponentFixture<DeleteRiskProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRiskProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRiskProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
