import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolicyComponent } from './edit-policy.component';

describe('EditPolicyComponent', () => {
  let component: EditPolicyComponent;
  let fixture: ComponentFixture<EditPolicyComponent>;

  beforeEach(async () => {
    //Prepare the component for testing
    await TestBed.configureTestingModule({
      declarations: [ EditPolicyComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(EditPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //creating the componenet, should be true.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
