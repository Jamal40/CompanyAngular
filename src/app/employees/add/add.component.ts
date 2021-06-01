import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  fname: string;
  lname: string;
  salary: number;
  deptNo = null;

  constructor(
    private empSerivce: EmployeesService,
    private deptService: DepartmentService,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      deptService.getAllDepartments().subscribe((value: any) => {
        this.departments = value;
      });
    });
  }

  departments = [];

  ngOnInit(): void {}

  onFnameInput(v: string) {
    this.fname = v;
  }
  onLnameInput(v: string) {
    this.lname = v;
  }
  onSalaryInput(v: number) {
    this.salary = v;
    console.log(this.deptNo);
  }
  onSelectInput(v: number) {
    console.log(this.deptNo);
  }
  onSubmit(e: any) {
    e.preventDefault();
    this.empSerivce
      .addEmployee(this.fname, this.lname, this.salary, this.deptNo)
      .subscribe((value) => {
        this.router.navigate(['/employees']);
      });
  }
}
