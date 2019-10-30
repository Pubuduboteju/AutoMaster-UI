import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserCommentsComponent } from './admin-user-comments.component';

describe('AdminUserCommentsComponent', () => {
  let component: AdminUserCommentsComponent;
  let fixture: ComponentFixture<AdminUserCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
