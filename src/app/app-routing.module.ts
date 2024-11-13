import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';

const routes: Routes = [
  {path:'', pathMatch:'full', component:EmployeeListComponent},
  {path:'list', component:EmployeeListComponent},
  {path:'add', component:AddEmployeeComponent},
  {path:'employee/:id', component:EmployeeCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
