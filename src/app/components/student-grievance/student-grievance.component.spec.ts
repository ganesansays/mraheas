import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGrievanceComponent } from './student-grievance.component';

describe('StudentGrievanceComponent', () => {
  let component: StudentGrievanceComponent;
  let fixture: ComponentFixture<StudentGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentGrievanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
