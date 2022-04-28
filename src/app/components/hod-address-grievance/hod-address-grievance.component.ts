import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GrievanceService } from 'src/app/services/grievances.service';

@Component({
  selector: 'app-hod-address-grievance',
  templateUrl: './hod-address-grievance.component.html',
  styleUrls: ['./hod-address-grievance.component.css']
})
export class HodAddressGrievanceComponent implements OnInit {

  constructor(private router:Router, private grievanceInfo : GrievanceService) { }

  grievances = this.grievanceInfo.getGrievances();
  dataSource = new MatTableDataSource();

  displayedColumns = ['Name', 'MobileNumber', 'Grievance', 'Download', 'Status']

  ngOnInit(): void {
    this.grievances.subscribe(result => {
      this.dataSource.data = result.grievances;
    })
  }

  logout() {
    localStorage.setItem('user', '');
    this.router.navigate(['']);
  }

}
