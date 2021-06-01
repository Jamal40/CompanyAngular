import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/Services/projects.service';
import { EmployeesService } from 'src/app/Services/employees.service';
import { WorksService } from 'src/app/Services/works.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  projects = [];
  employees = [];
  works = [];

  currentWork: any = {
    empNo: 1,
    projectNo: 1,
    job: '',
    enter_Date: Date.now(),
    employeeName: '',
    projectName: '',
  };

  constructor(
    private projectService: ProjectsService,
    private employeeService: EmployeesService,
    private worksService: WorksService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    projectService.getAllProjects().subscribe((value: any) => {
      this.projects = value;
    });

    employeeService.getAllEmployees().subscribe((value: any) => {
      this.employees = value;
    });

    worksService
      .getWorkById(
        this.route.snapshot.paramMap.get('empid'),
        this.route.snapshot.paramMap.get('projectid')
      )
      .subscribe((value: any) => {
        this.currentWork = value;
      });
  }

  ngOnInit(): void {}

  onJobInput(v: any) {
    this.currentWork.job = v;
  }

  onDateInput(v: any) {
    this.currentWork.enter_Date = v;
  }
  onSubmit(e: any) {
    e.preventDefault();
    this.worksService
      .editWork(
        this.currentWork.empNo,
        this.currentWork.projectNo,
        this.currentWork.job,
        this.currentWork.enter_Date
      )
      .subscribe((value) => {
        this.router.navigate(['/works']);
      });
  }
}
