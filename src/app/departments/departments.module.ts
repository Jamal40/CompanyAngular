import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsHomeComponent } from './departments-home/departments-home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [DepartmentsHomeComponent, AddComponent, EditComponent],
  imports: [CommonModule, DepartmentsRoutingModule],
  exports: [],
})
export class DepartmentsModule {}
