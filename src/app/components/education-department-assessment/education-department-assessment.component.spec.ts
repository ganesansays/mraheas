import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDepartmentAssessmentComponent } from './education-department-assessment.component';

describe('EducationDepartmentAssessmentComponent', () => {
  let component: EducationDepartmentAssessmentComponent;
  let fixture: ComponentFixture<EducationDepartmentAssessmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDepartmentAssessmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDepartmentAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
