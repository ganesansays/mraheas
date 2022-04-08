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
  isInstituteLogin : any;
  value: any;

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.isInstituteLogin = params['url'].includes('instituteAnalytics');
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
