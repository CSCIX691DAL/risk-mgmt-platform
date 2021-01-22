import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortProfileComponent } from './sort-profile.component';

describe('SortProfileComponent', () => {
  let component: SortProfileComponent;
  let fixture: ComponentFixture<SortProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
