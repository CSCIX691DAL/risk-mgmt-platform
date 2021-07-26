import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPolicyComponent } from './add-policy.component';

describe('AddPolicyComponent', () => {
  let component: AddPolicyComponent;
  let fixture: ComponentFixture<AddPolicyComponent>;

  beforeEach(async () => {
    //Prepare the component for testing
    await TestBed.configureTestingModule({
      declarations: [ AddPolicyComponent ]
    })
    .compileComponents();
  });
  //test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Creating the component
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
