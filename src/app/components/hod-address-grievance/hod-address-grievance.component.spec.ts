import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodAddressGrievanceComponent } from './hod-address-grievance.component';

describe('HodAddressGrievanceComponent', () => {
  let component: HodAddressGrievanceComponent;
  let fixture: ComponentFixture<HodAddressGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodAddressGrievanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodAddressGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
