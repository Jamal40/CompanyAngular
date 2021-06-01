import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  currentEmp: any = { fname: '', lname: '', salary: 0, deptNo: 1 };
  empNo: any;

  constructor(
    private empSerivce: EmployeesService,
    private deptService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe(() => {
      deptService.getAllDepartments().subscribe((value: any) => {
        this.departments = value;
        this.empNo = this.route.snapshot.paramMap.get('id');

        empSerivce.getEmployeebyId(this.empNo).subscribe((value) => {
          this.currentEmp = value;
        });
      });
    });
  }

  departments = [];

  ngOnInit(): void {}

  onFnameInput(v: string) {
    this.currentEmp.fname = v;
  }
  onLnameInput(v: string) {
    this.currentEmp.lname = v;
  }
  onSalaryInput(v: number) {
    this.currentEmp.salary = v;
  }
  onSelectInput(v: number) {}
  onSubmit(e: any) {
    e.preventDefault();
    this.empSerivce
      .editEmployee(
        this.currentEmp.empNo,
        this.currentEmp.fname,
        this.currentEmp.lname,
        this.currentEmp.salary,
        this.currentEmp.deptNo
      )
      .subscribe((value) => {
        this.router.navigate(['/employees']);
      });
  }
}
