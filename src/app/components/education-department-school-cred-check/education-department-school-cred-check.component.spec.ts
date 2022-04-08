import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDepartmentSchoolCredCheckComponent } from './education-department-school-cred-check.component';

describe('EducationDepartmentSchoolCredCheckComponent', () => {
  let component: EducationDepartmentSchoolCredCheckComponent;
  let fixture: ComponentFixture<EducationDepartmentSchoolCredCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDepartmentSchoolCredCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDepartmentSchoolCredCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
