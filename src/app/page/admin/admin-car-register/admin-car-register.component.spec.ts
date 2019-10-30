import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarRegisterComponent } from './admin-car-register.component';

describe('AdminCarRegisterComponent', () => {
  let component: AdminCarRegisterComponent;
  let fixture: ComponentFixture<AdminCarRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
