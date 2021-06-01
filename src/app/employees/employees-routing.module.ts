import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesHomeComponent } from './employees-home/employees-home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesHomeComponent,
  },
  {
    path: 'employees/edit/:id',
    component: EditComponent,
  },
  {
    path: 'employees/add',
    component: AddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
