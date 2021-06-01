import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}

  public getAllProjects() {
    return this.http.get('https://localhost:44396/api/Projects');
  }

  public getProjectById(id) {
    return this.http.get('https://localhost:44396/api/Projects/' + id);
  }

  public addProject(projectName, budget) {
    return this.http.post('https://localhost:44396/api/Projects', {
      projectName: projectName,
      budget: budget,
    });
  }

  public editProject(projectNo, projectName, budget) {
    return this.http.put('https://localhost:44396/api/Projects/' + projectNo, {
      projectNo: projectNo,
      projectName: projectName,
      budget: budget,
    });
  }

  public deleteProject(id) {
    return this.http.delete('https://localhost:44396/api/Projects/' + id);
  }
}
