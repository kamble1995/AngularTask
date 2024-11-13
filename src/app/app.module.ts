import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DepartmentFilterPipe } from './shared/Pipes/department-filter.pipe';
import { MaterialModule } from './shared/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogueModule } from './shared/dialogue/dialogue.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeCardComponent,
    DepartmentFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    DialogueModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
      

  ],
  providers: [
    provideAnimationsAsync(),
    DepartmentFilterPipe,  // Add the pipe here

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
