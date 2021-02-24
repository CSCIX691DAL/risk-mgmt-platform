import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgsListItemComponent } from './orgs-list-item.component';

describe('OrgsListItemComponent', () => {
  let component: OrgsListItemComponent;
  let fixture: ComponentFixture<OrgsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgsListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
