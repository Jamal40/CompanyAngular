import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  projects = [];
  constructor(private projectService: ProjectsService) {
    projectService.getAllProjects().subscribe((value: any) => {
      this.projects = value;
    });
  }

  ngOnInit(): void {}

  onDelete(projectNo) {
    this.projectService.deleteProject(projectNo).subscribe((value) => {
      this.projectService.getAllProjects().subscribe((value: any) => {
        this.projects = value;
      });
    });
  }
}
