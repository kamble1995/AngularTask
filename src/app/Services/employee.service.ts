import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IDepartments, IEmployee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  BaseURL = "http://localhost:3000";
  constructor(private http:HttpClient) { }

  getDepartments(){
    return this.http.get<IDepartments[]>(`${this.BaseURL}/departments`);
  }
  getEmployees(){
    return this.http.get<IEmployee[]>(`${this.BaseURL}/employees`);
  }
  createEmployee(data:IEmployee){
    return this.http.post<IEmployee>(`${this.BaseURL}/employees`,data);
  }
  deleteEmployee(id:string){
    return this.http.delete<IEmployee>(`${this.BaseURL}/employees/${id}`);
  }
}
