import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisburseSnackBarComponent } from './disburse-snack-bar.component';

describe('DisburseSnackBarComponent', () => {
  let component: DisburseSnackBarComponent;
  let fixture: ComponentFixture<DisburseSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisburseSnackBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisburseSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
