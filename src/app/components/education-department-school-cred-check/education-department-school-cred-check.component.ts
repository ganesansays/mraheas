import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-education-department-school-cred-check',
  templateUrl: './education-department-school-cred-check.component.html',
  styleUrls: ['./education-department-school-cred-check.component.css']
})
export class EducationDepartmentSchoolCredCheckComponent implements OnInit {

  constructor(private _formBuilder : FormBuilder) { }

  schoolCredCheck : FormGroup
  typeOfCollege: FormControl;
  institution: FormControl;
  selectedTypeOfCollege: any;


  ngOnInit(): void {
    this.schoolCredCheck = this._formBuilder.group({
      typeOfCollege: [''],
    });
  }

  districts: string[] = ['Ariyalur',
  'Karur',
  'Nagappattinam',
  'Perambalur',
  'Pudukkottai',
  'Thanjavur',
  'Tiruchirappalli',
  'Tiruvarur',
  'Dharmapuri',
  'Coimbatore',
  'Erode',
  'Krishnagiri',
  'Namakkal',
  'The Nilgiris',
  'Salem',
  'Tiruppur',
  'Dindigul',
  'Kanyakumari',
  'Madurai',
  'Ramanathapuram',
  'Sivagangai',
  'Theni',
  'Thoothukudi',
  'Tirunelveli',
  'Virudhunagar',
  'Tenkasi',
  'Chennai',
  'Cuddalore',
  'Kanchipuram',
  'Chengalpattu',
  'Tiruvallur',
  'Tiruvannamalai',
  'Vellore',
  'Viluppuram',
  'Kallakurichi',
  'Ranipet',
  'Thirupattur'
];

  typeOfInstitutions: string[] = [
  'Engineering',
  'Arts & Science',
  'Vocational'
  ];

  institutions: string[] = [
  'Anna University of Technology Tiruchirappalli – Ariyalur Campus',
  'District Institute of Education and Training(DIET)',
  'Government Arts College',
  'Government ITI, Ariyalur',
  'Government ITI, Andimadam',
  'Government Polytechnic College'
  ];


}
