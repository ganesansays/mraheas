import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteSchoolingValidationComponent } from './institute-schooling-validation.component';

describe('InstituteSchoolingValidationComponent', () => {
  let component: InstituteSchoolingValidationComponent;
  let fixture: ComponentFixture<InstituteSchoolingValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstituteSchoolingValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstituteSchoolingValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
