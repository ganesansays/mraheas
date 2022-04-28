import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalStudentMessageComponent } from './approval-student-message.component';

describe('ApprovalStudentMessageComponent', () => {
  let component: ApprovalStudentMessageComponent;
  let fixture: ComponentFixture<ApprovalStudentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalStudentMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalStudentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
