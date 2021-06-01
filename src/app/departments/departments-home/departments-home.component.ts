import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-departments-home',
  templateUrl: './departments-home.component.html',
  styleUrls: ['./departments-home.component.css'],
})
export class DepartmentsHomeComponent implements OnInit {
  departments: [];
  constructor(private deptserivce: DepartmentService) {
    deptserivce.getAllDepartments().subscribe((value: any) => {
      this.departments = value;
    });
  }

  ngOnInit(): void {}

  onDelete(deptNo) {
    this.deptserivce.deleteDepartment(deptNo).subscribe((value) => {
      this.deptserivce.getAllDepartments().subscribe((value: any) => {
        this.departments = value;
      });
    });
  }
}
