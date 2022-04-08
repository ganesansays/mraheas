import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registered-students',
  templateUrl: './registered-students.component.html',
  styleUrls: ['./registered-students.component.css']
})
export class RegisteredStudentsComponent implements OnInit {

  constructor(private router:Router) { }

  displayedColumns = ['Year', 'Term', 'Status', 'Amount']

  dataSource = [
    {'Year': 2020, 'Term': 1, 'Status': 'Transfered', 'Amount': 'Rs. 1000'},
    {'Year': 2020, 'Term': 2, 'Status': 'Transfered', 'Amount': 'Rs. 1000'},
    {'Year': 2021, 'Term': 1, 'Status': 'Transfered', 'Amount': 'Rs. 1000'},
    {'Year': 2021, 'Term': 2, 'Status': 'Pending', 'Amount': 'Rs. 1000'}
  ]

  ngOnInit(): void {
  }

  updateBankDetails() {
    this.router.navigate(['updateBankDetails']);
  }

  updateProfile() {
    this.router.navigate(['updateStudentProfile']);
  }

  showDisbursement() {
    this.router.navigate(['studentDisbursement']);
  }

  showStudentDocuments() {
    this.router.navigate(['studentDocuments']);
  }

}
