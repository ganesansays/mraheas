import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-disbursement',
  templateUrl: './student-disbursement.component.html',
  styleUrls: ['./student-disbursement.component.css']
})
export class StudentDisbursementComponent implements OnInit {

  constructor(private router:Router) { }

  displayedColumns = ['Year', 'Term', 'Status', 'Amount', 'Upload']

  dataSource = [
    {'Year': 2020, 'Term': 1, 'Status': 'Transfered', 'Amount': 'Rs. 1000'},
    {'Year': 2020, 'Term': 2, 'Status': 'Transfered', 'Amount': 'Rs. 1000'},
    {'Year': 2021, 'Term': 1, 'Status': 'Transfered', 'Amount': 'Rs. 1000'},
    {'Year': 2021, 'Term': 2, 'Status': 'Pending', 'Amount': 'Rs. 1000'}
  ]

  ngOnInit(): void {
  }

  gotoProfileHome() {
    this.router.navigate(['registeredStudents']);
  }
}
