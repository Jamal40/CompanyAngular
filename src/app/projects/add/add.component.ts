import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/Services/projects.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  projectName: string;
  budget: number;

  constructor(
    private projectService: ProjectsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onNameInput(v: string) {
    this.projectName = v;
  }
  onBudgetInput(v: number) {
    this.budget = v;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.projectService
      .addProject(this.projectName, this.budget)
      .subscribe((value) => {
        this.router.navigate(['/projects']);
      });
  }
}
