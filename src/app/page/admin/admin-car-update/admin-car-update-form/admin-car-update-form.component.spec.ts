import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCarUpdateFormComponent } from './admin-car-update-form.component';

describe('AdminCarUpdateFormComponent', () => {
  let component: AdminCarUpdateFormComponent;
  let fixture: ComponentFixture<AdminCarUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCarUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCarUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
