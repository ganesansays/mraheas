import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDepartmentEmisApprovalComponent } from './education-department-emis-approval.component';

describe('EducationDepartmentEmisApprovalComponent', () => {
  let component: EducationDepartmentEmisApprovalComponent;
  let fixture: ComponentFixture<EducationDepartmentEmisApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationDepartmentEmisApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDepartmentEmisApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
