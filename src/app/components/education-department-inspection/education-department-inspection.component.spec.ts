import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDepartmentInspectionComponent } from './education-department-inspection.component';

describe('EducationDepartmentInspectionComponent', () => {
  let component: EducationDepartmentInspectionComponent;
  let fixture: ComponentFixture<EducationDepartmentInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDepartmentInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDepartmentInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
