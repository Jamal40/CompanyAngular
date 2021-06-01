import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [EmployeesHomeComponent, EditComponent, AddComponent],
  imports: [CommonModule, FormsModule, EmployeesRoutingModule],
  exports: [],
})
export class EmployeesModule {}
