import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsViewComponent } from './orgs-view.component';

describe('OrgsViewComponent', () => {
  let component: OrgsViewComponent;
  let fixture: ComponentFixture<OrgsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
