import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    localStorage.setItem('user', "{'name' : this.username}");
    this.activatedRoute.queryParams.subscribe(params => {
      this.router.navigate([params['url']]);
    });
    
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

}
