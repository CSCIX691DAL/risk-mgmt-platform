import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyComponent } from './policy.component';

describe('PolicyComponent', () => {
  let component: PolicyComponent;
  let fixture: ComponentFixture<PolicyComponent>;
  
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //component should be true
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
