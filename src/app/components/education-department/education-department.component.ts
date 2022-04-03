import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentInfoService } from 'src/app/services/student-info.service';

@Component({
  selector: 'app-education-department',
  templateUrl: './education-department.component.html',
  styleUrls: ['./education-department.component.css']
})
export class EducationDepartmentComponent implements OnInit {

  studentsInfo = this.studentInfoService.getStudentsInfo();
  dataSource = new MatTableDataSource();
  filterValues = {
    "name" : ""
  }

  filterSelectObj : any;

  // "name": "Thamizh Mozhi",
  // "aadhaarNumber": "1234567890123456",
  // "ugColledge": "Goverment Arts Colledge",
  // "district": "Trichirapalli",
  // "year": 2022,
  // "term1Status": "Approved",
  // "term2Status": "Not Approved" 
  displayedColumns = ['Select', 'Year', 'District', 'Institution', 'Aadhaar Number', 'Name', 'Term 1 Status', 'Term 2 Status', 'Account Number']

  constructor(private studentInfoService: StudentInfoService) { 

    this.filterSelectObj = [
      {
        name: 'YEAR',
        columnProp: 'year',
        options: []
      },
      {
        name: 'NAME',
        columnProp: 'name',
        options: []
      },
      {
        name: 'Aadhaar Number',
        columnProp: 'aadhaarNumber',
        options: []
      },
      {
        name: 'Term 1 Status',
        columnProp: 'term1Status',
        options: []
      },
      {
        name: 'Term 2 Status',
        columnProp: 'term2Status',
        options: []
      }
    ];
  }

  ngOnInit(): void {
    this.studentsInfo.subscribe(result => {
      this.dataSource.data = result.disbursmentInfo;
      this.dataSource.filterPredicate = this.createFilter();
      // this.dataSource.filter = '{"name" : "Thamizh Mozhi"}';
    })
  }

  selectAll() {
    
  }

  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word: string)  => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }

}
