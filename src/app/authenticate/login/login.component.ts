import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorExists = false;
  ussername: string;
  password: string;
  constructor(private security: SecurityService, private router: Router) {
    this.router.events.subscribe(() => {
      if (sessionStorage.getItem('token') != null) router.navigate(['/']);
    });
  }

  ngOnInit(): void {}

  onUserInput(v: string) {
    this.ussername = v;
  }

  onPassInput(v: string) {
    this.password = v;
  }
  onSubmit(e: any) {
    console.log(this.ussername);
    e.preventDefault();
    this.security.login(this.ussername, this.password).subscribe(
      (value: any) => {
        let x = sessionStorage.setItem('token', value.token);
        console.log(sessionStorage.getItem('token'));
        window.open('/', '_self');
      },
      (error) => {
        this.errorExists = true;
      }
    );
  }
}
