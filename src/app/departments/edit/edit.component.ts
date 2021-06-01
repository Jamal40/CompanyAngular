import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  currentDept: any;
  constructor(
    private deptService: DepartmentService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.router.events.subscribe((value: any) => {
      this.currentDept = deptService
        .getDeptById(this.route.snapshot.paramMap.get('id'))
        .subscribe((value) => {
          this.currentDept = value;
        });
    });
  }

  ngOnInit(): void {}

  onNameInput(v: string) {
    this.currentDept.deptName = v;
  }
  onLocationInput(v: string) {
    this.currentDept.location = v;
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.deptService
      .editDepartment(
        this.currentDept.deptNo,
        this.currentDept.deptName,
        this.currentDept.location
      )
      .subscribe((value) => {
        this.router.navigate(['/departments']);
      });
  }
}
