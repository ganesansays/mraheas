import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    document.getElementById('html')?.setAttribute("style", "overflow:scroll!important;");
  }

  navigateToLogin() {
    this.router.navigate(['homePage']);
  }

}
