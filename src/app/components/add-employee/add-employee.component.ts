import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';
import { IDepartments, IEmployee } from '../../Models/employee';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{
  employeeForm!: FormGroup;
  Departments : IDepartments[] = [];

  constructor(private fb: FormBuilder,
              private router:Router,
              private empService : EmployeeService,
              private toastr: ToastrService) {}
  ngOnInit(): void {
    this.initForm();
    this.getDepartments();
  }
  initForm(){
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: ['', Validators.required],
      joiningDate: ['', Validators.required]
    });
  }
  getDepartments(){
    this.empService.getDepartments().subscribe((result:IDepartments[]) =>{
      this.Departments = result
      console.log(this.Departments);
    },
    (error) => {
      this.toastr.error('Falied to get departments');
    })
  }
  onSubmit() {
    if (this.employeeForm.valid) {
      this.empService.createEmployee(this.employeeForm.value).subscribe((result:IEmployee) =>{
        this.toastr.success('Employee added successfully');
        this.router.navigate(['list']); 
      },
      (error) => {
        this.toastr.error('Falied to add employee');
      })
    }
  }

}
