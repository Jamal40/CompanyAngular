import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private http: HttpClient) {}

  public getAllEmployees() {
    return this.http.get('https://localhost:44396/api/Employees');
  }

  public getEmployeebyId(id) {
    return this.http.get('https://localhost:44396/api/Employees/' + id);
  }

  public addEmployee(fname, lname, salary, deptNo) {
    return this.http.post('https://localhost:44396/api/Employees', {
      fname: fname,
      lname: lname,
      salary: salary,
      deptNo: deptNo,
    });
  }

  public editEmployee(empNo, fname, lname, salary, deptNo) {
    return this.http.put('https://localhost:44396/api/Employees/' + empNo, {
      empNo: empNo,
      fname: fname,
      lname: lname,
      salary: salary,
      deptNo: deptNo,
    });
  }

  public deleteEmployee(id) {
    return this.http.delete('https://localhost:44396/api/Employees/' + id);
  }
}
