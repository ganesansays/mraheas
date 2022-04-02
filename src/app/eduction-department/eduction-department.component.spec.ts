import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EductionDepartmentComponent } from './eduction-department.component';

describe('EductionDepartmentComponent', () => {
  let component: EductionDepartmentComponent;
  let fixture: ComponentFixture<EductionDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EductionDepartmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EductionDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
