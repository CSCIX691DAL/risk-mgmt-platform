import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortCategoryComponent } from './sort-category.component';

describe('SortCategoryComponent', () => {
  let component: SortCategoryComponent;
  let fixture: ComponentFixture<SortCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
