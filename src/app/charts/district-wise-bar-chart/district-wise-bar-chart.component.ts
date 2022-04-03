import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-district-wise-bar-chart',
  templateUrl: './district-wise-bar-chart.component.html',
  styleUrls: ['./district-wise-bar-chart.component.css']
})
export class DistrictWiseBarChartComponent {
  centralZoneEnrollmentData: ChartData<'bar'> = {
    labels: [ 'Ariyalur',
    'Karur',
    'Nagappattinam',
    'Perambalur',
    'Pudukkottai',
    'Thanjavur',
    'Tiruchirappalli',
    'Tiruvarur' ],
    datasets: [
      { data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000 ], label: 'Enrollment' },
    ]
  };

  centralZoneChartOptions: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'Central Zone Enrollment',
      },
    },
  };

  westZoneEnrollmentData: ChartData<'bar'> = {
    labels: [ 'Dharmapuri',
    'Coimbatore',
    'Erode',
    'Krishnagiri',
    'Namakkal',
    'The Nilgiris',
    'Salem',
    'Tiruppur' ],
    datasets: [
      { data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000, 1200 ], label: 'Enrollment' },
    ]
  };

  westZoneChartOptions: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'West Zone Enrollment',
      },
    },
  };

  southZoneEnrollmentData: ChartData<'bar'> = {
    labels: [ 'Dindigul',
    'Kanyakumari',
    'Madurai',
    'Ramanathapuram',
    'Sivagangai',
    'Theni',
    'Thoothukudi',
    'Tirunelveli',
    'Virudhunagar',
    'Tenkasi', ],
    datasets: [
      { 
        data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000, 1200, 5600, 5500 ], 
        label: 'Enrollment',
        backgroundColor: '#82B1FF'

      },
    ]
  };

  southZoneChartOptions: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'South Zone Enrollment',
      },
    },
  };

  northZoneEnrollmentData: ChartData<'bar'> = {
    labels: [ 'Chennai',
    'Cuddalore',
    'Kanchipuram',
    'Chengalpattu',
    'Tiruvallur',
    'Tiruvannamalai',
    'Vellore',
    'Viluppuram',
    'Kallakurichi',
    'Ranipet',
    'Thirupattur', ],
    datasets: [
      { 
        data: [ 6500, 5900, 8000, 8100, 5600, 5500, 4000, 1200, 5600, 5500, 2700 ], 
        label: 'Enrollment',
        backgroundColor: '#FF8A80'
      },
    ]
  };

  northZoneChartOptions: ChartOptions = {
    responsive: true, maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: 'North Zone Enrollment',
      },
    },
  };

  constructor() {}
}
