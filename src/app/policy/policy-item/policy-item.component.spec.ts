import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyItemComponent } from './policy-item.component';

describe('PolicyItemComponent', () => {
  let component: PolicyItemComponent;
  let fixture: ComponentFixture<PolicyItemComponent>;

  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyItemComponent ]
    })
    .compileComponents();
  });
  //test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //creating the component, should be true
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
