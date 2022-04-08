import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution-analytics',
  templateUrl: './institution-analytics.component.html',
  styleUrls: ['./institution-analytics.component.css']
})
export class InstitutionAnalyticsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.getElementById('html')?.setAttribute("style", "overflow:scroll!important;");
  }

  navigateToApproveAttendence() {
    this.router.navigate(['instituteAdmin']);
  }

  navigateToSchooling() {
    this.router.navigate(['instituteValidateSchooling']);
  }

  logout() {
    localStorage.setItem('user', '');
    this.router.navigate(['']);
  }

}
