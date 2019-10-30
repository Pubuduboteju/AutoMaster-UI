import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarViewDetailsComponent } from './admin-car-view-details.component';

describe('AdminCarViewDetailsComponent', () => {
  let component: AdminCarViewDetailsComponent;
  let fixture: ComponentFixture<AdminCarViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
