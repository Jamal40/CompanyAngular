import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAuth = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isAuth = sessionStorage.getItem('token') != null;
    });
  }

  onClick() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
