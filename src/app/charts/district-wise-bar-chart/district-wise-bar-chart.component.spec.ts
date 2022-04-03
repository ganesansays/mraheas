import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';

import { DistrictWiseBarChartComponent } from './district-wise-bar-chart.component';

describe('DistrictWiseBarChartComponent', () => {
  let component: DistrictWiseBarChartComponent;
  let fixture: ComponentFixture<DistrictWiseBarChartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictWiseBarChartComponent ],
      imports: [ NgChartsModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictWiseBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
