import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksModule } from './works/works.module';
import { ProjectsModule } from './projects/projects.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { AuthenticateModule } from './authenticate/authenticate.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    WorksModule,
    ProjectsModule,
    EmployeesModule,
    DepartmentsModule,
    AuthenticateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
