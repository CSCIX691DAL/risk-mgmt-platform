import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeletePolicyComponent } from './delete-policy.component';

describe('DeletePolicyComponent', () => {
  let component: DeletePolicyComponent;
  let fixture: ComponentFixture<DeletePolicyComponent>;

  beforeEach(async () => {
    //Prepare the componennt for testing
    await TestBed.configureTestingModule({
      declarations: [ DeletePolicyComponent ]
    })
    .compileComponents();
  });
  //Test the component
  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  //Creating the component, should be true.
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
