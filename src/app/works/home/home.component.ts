import { Component, OnInit } from '@angular/core';
import { WorksService } from '../../Services/works.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  works = [];
  constructor(private workService: WorksService) {
    workService.getAllWork().subscribe((value: any) => {
      this.works = value;
    });
  }

  ngOnInit(): void {}

  onDelete(empNo, projectNo) {
    this.workService.deleteWork(empNo, projectNo).subscribe((value) => {
      this.workService.getAllWork().subscribe((value: any) => {
        this.works = value;
      });
    });
  }
}
