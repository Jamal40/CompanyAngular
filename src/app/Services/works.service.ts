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

  public getWorkById(empNo, projectNo) {
    return this.http.get(
      `https://localhost:44396/api/works_on/${empNo}/${projectNo}`
    );
  }

  public addWork(empNo, projectNo, job, enter_Date) {
    return this.http.post('https://localhost:44396/api/works_on', {
      empNo: empNo,
      projectNo: projectNo,
      job: job,
      enter_Date: enter_Date,
    });
  }

  public editWork(empNo, projectNo, job, enter_Date) {
    return this.http.put(
      `https://localhost:44396/api/works_on/${empNo}/${projectNo}`,
      {
        empNo: empNo,
        projectNo: projectNo,
        job: job,
        enter_Date: enter_Date,
      }
    );
  }
  public deleteWork(empNo, projectNo) {
    return this.http.delete(
      `https://localhost:44396/api/works_on/${empNo}/${projectNo}`
    );
  }
}
