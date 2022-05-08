import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    localStorage.setItem('user', '');
    this.router.navigate(['']); 
  }

  ngAfterViewInit() {
    document.getElementById('html')?.setAttribute("style", "overflow:hidden!important;");
  }

}
