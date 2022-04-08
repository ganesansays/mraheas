import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDepartmentSchoolingComponent } from './education-department-schooling.component';

describe('EducationDepartmentSchoolingComponent', () => {
  let component: EducationDepartmentSchoolingComponent;
  let fixture: ComponentFixture<EducationDepartmentSchoolingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDepartmentSchoolingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDepartmentSchoolingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
