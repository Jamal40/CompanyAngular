import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root',
})
export class WorksService {
  constructor(private http: HttpClient) {}

  public getAllWork() {
    return this.http.get('https://localhost:44396/api/works_on');
  }

  public getWorkById(empNo, deptNo) {
    return this.http.get(
      `https://localhost:44396/api/works_on/${empNo}/${deptNo}`
    );
  }

  public addDepartment(deptName, location) {
    return this.http.post('https://localhost:44396/api/works_on', {
      deptName: deptName,
      location: location,
    });
  }

  public editDepartment(empNo, deptNo, deptName, location) {
    return this.http.put(
      `https://localhost:44396/api/works_on/${empNo}/${deptNo}`,
      {
        deptNo: deptNo,
        deptName: deptName,
        location: location,
      }
    );
  }
  public deleteDepartment(empNo, deptNo) {
    return this.http.delete(
      `https://localhost:44396/api/works_on/${empNo}/${deptNo}`
    );
  }
}
