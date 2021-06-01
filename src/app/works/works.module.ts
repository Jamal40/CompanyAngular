import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WorksRoutingModule } from './works-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [HomeComponent, AddComponent, EditComponent],
  imports: [CommonModule, FormsModule, WorksRoutingModule],
})
export class WorksModule {}
