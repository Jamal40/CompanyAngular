import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-home',
  templateUrl: './employees-home.component.html',
  styleUrls: ['./employees-home.component.css'],
})
export class EmployeesHomeComponent implements OnInit {
  employees = [];

  constructor(private empService: EmployeesService) {
    empService.getAllEmployees().subscribe((value: any) => {
      this.employees = value;
    });
  }

  ngOnInit(): void {}
  onDelete(empNo) {
    console.log(empNo);
    this.empService.deleteEmployee(empNo).subscribe(() => {
      this.empService.getAllEmployees().subscribe((value: any) => {
        this.employees = value;
      });
    });
  }
}
