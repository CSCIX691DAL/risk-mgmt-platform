import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgAdminPanelComponent } from './org-admin-panel.component';

describe('OrgAdminPanelComponent', () => {
  let component: OrgAdminPanelComponent;
  let fixture: ComponentFixture<OrgAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgAdminPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
