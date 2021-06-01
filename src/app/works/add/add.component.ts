import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/Services/projects.service';
import { EmployeesService } from 'src/app/Services/employees.service';
import { WorksService } from 'src/app/Services/works.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  projects = [];
  employees = [];
  works = [];

  projectNo: any = -1;
  empNo: any = -1;
  enter_Date: Date;
  job: string;

  constructor(
    private projectService: ProjectsService,
    private employeeService: EmployeesService,
    private worksService: WorksService,
    private router: Router
  ) {
    projectService.getAllProjects().subscribe((value: any) => {
      this.projects = value;
    });

    employeeService.getAllEmployees().subscribe((value: any) => {
      this.employees = value;
    });
  }

  ngOnInit(): void {}
  onJobInput(v: any) {
    this.job = v;
  }

  onDateInput(v: any) {
    this.enter_Date = v;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.worksService
      .addWork(this.empNo, this.projectNo, this.job, this.enter_Date)
      .subscribe((value) => {
        this.router.navigate(['/works']);
      });
  }
}
