import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from 'src/app/Services/security.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  errorExists = false;
  username = '';
  email = '';
  password = '';

  constructor(private router: Router, private security: SecurityService) {
    this.router.events.subscribe(() => {
      if (sessionStorage.getItem('token') != null) router.navigate(['/']);
    });
  }

  ngOnInit(): void {}
  onSubmit(e: any) {
    e.preventDefault();

    this.security.signup(this.username, this.email, this.password).subscribe(
      (value: any) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        this.errorExists = true;
      }
    );
  }
  onUserInput(v: string) {
    this.username = v;
  }
  onMailInput(v: string) {
    this.email = v;
  }
  onPassInput(v: string) {
    this.password = v;
  }
}
