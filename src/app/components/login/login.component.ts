import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  departments = ['CEO/DC', 'Dean/Director']

  departmentsFormControl : FormControl;
  department : any;
  isEduDeptLogin : any = false;
  departmentName : any;
  value: any;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {

      if(params['url'].includes('educationDepartmentAssessment')) {
        this.isEduDeptLogin = true;
        this.departmentName = "SCHOOL EDU. DEPT.";
      } else if (params['url'].includes('instituteAnalytics')) {
        this.departmentName = "COLLEGE";
      } else if (params['url'].includes('socialWelfare')) {
        this.departmentName = "SOCIAL WELFARE DEPT.";
      } else if (params['url'].includes('hodDashboard')) {
        this.departmentName = "HOD";
      } else if (params['url'].includes('studentRegistration')) {
        this.departmentName = "STUDENT REGISTRATION";
      }
      console.log(params['url']);
      console.log(this.isEduDeptLogin);
    });
  }

  ngAfterViewInit() {
    document.getElementById('html')?.setAttribute("style", "overflow:scroll!important;");
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl('')
  });

  submit() {
    localStorage.setItem('user', JSON.stringify({'name' : 'name', 'type': this.value}));
    this.activatedRoute.queryParams.subscribe(params => {
      this.router.navigate([params['url']]);
    });
    
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
