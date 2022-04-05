import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mraheas';

  constructor(private router:Router) {
    
  }

  logout() {
    localStorage.setItem('user', '');
    this.router.navigate(['']);
  }

  routeToHome() {
    console.log('routeToHome');
    this.router.navigate(['']);
  }
}
