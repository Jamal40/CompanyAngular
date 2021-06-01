import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  public login(username: string, password: string) {
    let result = this.http.post(
      'https://localhost:44396/login',
      {
        Username: username,
        Password: password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return result;
  }

  public signup(username: string, email: string, password: string) {
    let result = this.http.post(
      'https://localhost:44396/register',
      {
        Username: username,
        Email: email,
        Password: password,
      },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return result;
  }
}
