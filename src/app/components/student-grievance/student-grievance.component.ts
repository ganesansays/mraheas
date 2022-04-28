import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-grievance',
  templateUrl: './student-grievance.component.html',
  styleUrls: ['./student-grievance.component.css']
})
export class StudentGrievanceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoProfileHome() {
    this.router.navigate(['registeredStudents']);
  }

}
