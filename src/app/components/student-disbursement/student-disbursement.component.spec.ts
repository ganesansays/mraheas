import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDisbursementComponent } from './student-disbursement.component';

describe('StudentDisbursementComponent', () => {
  let component: StudentDisbursementComponent;
  let fixture: ComponentFixture<StudentDisbursementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDisbursementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDisbursementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
