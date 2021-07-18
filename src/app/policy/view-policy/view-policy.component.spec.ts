import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPolicyComponent } from './view-policy.component';

describe('ViewPolicyComponent', () => {
  let component: ViewPolicyComponent;
  let fixture: ComponentFixture<ViewPolicyComponent>;
  
  //Prepare the component for testing
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPolicyComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //Component should be true
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
