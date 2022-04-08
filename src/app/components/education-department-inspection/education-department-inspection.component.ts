import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentInfoService } from 'src/app/services/student-info.service';
import { ApprovalMessageComponent } from '../approval-message/approval-message.component';

@Component({
  selector: 'app-education-department-inspection',
  templateUrl: './education-department-inspection.component.html',
  styleUrls: ['./education-department-inspection.component.css']
})
export class EducationDepartmentInspectionComponent implements OnInit {
      studentsInfo = this.studentInfoService.getStudentsInfo();
      dataSource = new MatTableDataSource();
      filterValues = {
        "name" : ""
      }
    
      filterSelectObj : any;
    
      // "name": "Thamizh Mozhi",
      // "aadhaarNumber": "1234567890123456",
      // "ugColledge": "Government Arts Colledge",
      // "district": "Trichirapalli",
      // "year": 2022,
      // "term1Status": "Approved",
      // "term2Status": "Not Approved" 
      displayedColumns = ['Select', 'Datetime', 'Aadhaar No.', 'Name', 'SchoolName', 'Batch', 'Status', 'Remarks']
    
      constructor(private studentInfoService: StudentInfoService, private router: Router, private _snackBar: MatSnackBar) { 
    
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
          }
        ];
      }
    
      ngOnInit(): void {
        this.studentsInfo.subscribe(result => {
          this.dataSource.data = result.disbursmentInfo;
          this.dataSource.filterPredicate = this.createFilter();
          this.dataSource.filter = '{"term1Status" : "disbursed"}';
        })
      }
    
      ngAfterViewInit() {
        document.getElementById('html')?.setAttribute("style", "overflow:scroll!important;");
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
    
          let nameSearch = () => {
            let found = false;
            if (isFilterSet) {
              for (const col in searchTerms) {
                  if (data[col].toString().toLowerCase() == searchTerms[col].trim() && isFilterSet) {
                    found = true
                  }
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
    
      logout() {
        localStorage.setItem('user', '');
        this.router.navigate(['']);
      }
    
      approve() {
        this._snackBar.openFromComponent(ApprovalMessageComponent, {
          duration: 2000
        });
        return false;
      }
    
      showAnalytics() {
        this.router.navigate(['instituteAnalytics'])
      }
    
      isFiltered = false;
    
      toggleFilter() {
        this.isFiltered = !this.isFiltered;
      }
    }
    