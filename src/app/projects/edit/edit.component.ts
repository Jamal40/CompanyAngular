import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  currentProject: any;
  constructor(
    private projectService: ProjectsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((value: any) => {
      this.currentProject = projectService
        .getProjectById(this.route.snapshot.paramMap.get('id'))
        .subscribe((value) => {
          this.currentProject = value;
        });
    });
  }

  ngOnInit(): void {}

  onNameInput(v: string) {
    this.currentProject.projectName = v;
  }
  onBudgetInput(v: number) {
    this.currentProject.budget = v;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.projectService
      .editProject(
        this.currentProject.projectNo,
        this.currentProject.projectName,
        this.currentProject.budget
      )
      .subscribe((value) => {
        this.router.navigate(['/projects']);
      });
  }
}
