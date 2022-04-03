import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDepartmentComponent } from './education-department.component';

describe('EducationDepartmentComponent', () => {
  let component: EducationDepartmentComponent;
  let fixture: ComponentFixture<EducationDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
