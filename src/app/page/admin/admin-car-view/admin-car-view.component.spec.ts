import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarViewComponent } from './admin-car-view.component';

describe('AdminCarViewComponent', () => {
  let component: AdminCarViewComponent;
  let fixture: ComponentFixture<AdminCarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
