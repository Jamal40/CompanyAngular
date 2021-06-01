import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  deptName: string;
  location: string;

  constructor(private deptService: DepartmentService, private router: Router) {}

  ngOnInit(): void {}

  onNameInput(v: string) {
    this.deptName = v;
  }
  onLocationInput(v: string) {
    this.location = v;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.deptService
      .addDepartment(this.deptName, this.location)
      .subscribe((value) => {
        this.router.navigate(['/departments']);
      });
  }
}
