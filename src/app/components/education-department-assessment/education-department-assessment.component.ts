import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-department-assessment',
  templateUrl: './education-department-assessment.component.html',
  styleUrls: ['./education-department-assessment.component.css']
})
export class EducationDepartmentAssessmentComponent implements OnInit {

  
  constructor(private router: Router) {
    
  }
  ngOnInit(): void {
    
  }

  logout() {
    localStorage.setItem('user', '');
    this.router.navigate(['']);
  }

}
