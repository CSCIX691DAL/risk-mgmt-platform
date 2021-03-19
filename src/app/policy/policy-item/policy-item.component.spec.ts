import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyItemComponent } from './policy-item.component';

describe('PolicyItemComponent', () => {
  let component: PolicyItemComponent;
  let fixture: ComponentFixture<PolicyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
