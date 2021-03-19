import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePolicyComponent } from './delete-policy.component';

describe('DeletePolicyComponent', () => {
  let component: DeletePolicyComponent;
  let fixture: ComponentFixture<DeletePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
