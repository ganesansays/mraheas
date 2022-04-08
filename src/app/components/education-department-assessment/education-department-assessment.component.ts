import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-department-assessment',
  templateUrl: './education-department-assessment.component.html',
  styleUrls: ['./education-department-assessment.component.css']
})
export class EducationDepartmentAssessmentComponent implements OnInit {

  type:any;

  constructor(private router: Router) {
    var user = localStorage.getItem('user');
    this.type = JSON.parse(user?user:'{}').type;
    
  }
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    document.getElementById('html')?.setAttribute("style", "overflow:scroll!important;");
  }

  logout() {
    localStorage.setItem('user', '');
    this.router.navigate(['']);
  }

  navigateToDisbursement() {
    this.router.navigate(['educationDepartment']);
  }
}
