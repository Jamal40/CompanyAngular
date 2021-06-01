import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  public getAllEmployees() {
    let auth_token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });

    return this.http.get('https://localhost:44396/api/Employees', {
      headers: headers,
    });
  }

  public getEmployeebyId(id) {
    let auth_token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });
    return this.http.get('https://localhost:44396/api/Employees/' + id, {
      headers: headers,
    });
  }

  public addEmployee(fname, lname, salary, deptNo) {
    let auth_token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });

    return this.http.post(
      'https://localhost:44396/api/Employees',
      {
        fname: fname,
        lname: lname,
        salary: salary,
        deptNo: deptNo,
      },
      {
        headers: headers,
      }
    );
  }

  public editEmployee(empNo, fname, lname, salary, deptNo) {
    let auth_token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });
    return this.http.put(
      'https://localhost:44396/api/Employees/' + empNo,
      {
        empNo: empNo,
        fname: fname,
        lname: lname,
        salary: salary,
        deptNo: deptNo,
      },
      { headers: headers }
    );
  }

  public deleteEmployee(id) {
    let auth_token = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth_token}`,
    });
    return this.http.delete('https://localhost:44396/api/Employees/' + id, {
      headers: headers,
    });
  }
}
