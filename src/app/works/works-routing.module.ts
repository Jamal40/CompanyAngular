import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'works', component: HomeComponent },
  { path: 'works/edit/:empid/:projectid', component: EditComponent },
  { path: 'works/add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorksRoutingModule {}
