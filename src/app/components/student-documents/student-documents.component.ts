import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-documents',
  templateUrl: './student-documents.component.html',
  styleUrls: ['./student-documents.component.css']
})
export class StudentDocumentsComponent implements OnInit {

  constructor(private router:Router) { }

  uploadFormGroup : FormGroup;

  ngOnInit(): void {
  }

  gotoProfileHome() {
    this.router.navigate(['registeredStudents']);
  }

}
