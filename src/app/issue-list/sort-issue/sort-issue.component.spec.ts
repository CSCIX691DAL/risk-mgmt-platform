import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortIssueComponent } from './sort-issue.component';

describe('SortIssueComponent', () => {
  let component: SortIssueComponent;
  let fixture: ComponentFixture<SortIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortIssueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
