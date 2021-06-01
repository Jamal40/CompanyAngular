import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  public getAllDepartments() {
    return this.http.get('https://localhost:44396/api/Departments');
  }

  public getDeptById(id) {
    return this.http.get('https://localhost:44396/api/Departments/' + id);
  }

  public addDepartment(deptName, location) {
    return this.http.post('https://localhost:44396/api/Departments', {
      deptName: deptName,
      location: location,
    });
  }

  public editDepartment(deptNo, deptName, location) {
    return this.http.put('https://localhost:44396/api/Departments/' + deptNo, {
      deptNo: deptNo,
      deptName: deptName,
      location: location,
    });
  }

  public deleteDepartment(id) {
    return this.http.delete('https://localhost:44396/api/Departments/' + id);
  }
}
