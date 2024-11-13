import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IEmployee } from '../../Models/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../Services/employee.service';
import { DepartmentFilterPipe } from '../../shared/Pipes/department-filter.pipe';
import { DialogueComponent } from '../../shared/dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'] 
})
export class EmployeeListComponent implements OnInit, AfterViewInit {
  employeeColumns: string[] = ['name', 'email', 'department', 'joiningDate', 'Delete'];
  employeeData: IEmployee[] = [];
  dataSource = new MatTableDataSource(this.employeeData);
  departmentFilter: string = '';
  selectedEmployee: IEmployee | null = null;


  @ViewChild(MatSort) sort!: MatSort;
  constructor(private _liveAnnouncer: LiveAnnouncer, private router:Router, 
              private empService : EmployeeService,
              private departmentFilterPipe : DepartmentFilterPipe,
              private dialog: MatDialog,
              private toastr: ToastrService
            ) {} // Corrected constructor syntax

  ngOnInit(): void {
    this.loadEmployees();
  }
  
  loadEmployees(){
    this.empService.getEmployees().subscribe((result:IEmployee[])=>{
       this.employeeData = result;
       this.dataSource = new MatTableDataSource(this.employeeData);
      //  this.dataSource.data = this.employeeData; 
       this.dataSource.data = this.departmentFilterPipe.transform(result, this.departmentFilter);
       this.dataSource.sort = this.sort;
       console.log(this.dataSource.data);
    },
    (error) => {
      this.toastr.error('Falied to get employees');
    })
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  addEmployee(){
    this.router.navigate(['add']);
  }
  deleteEmployee(element: IEmployee) {
    const dialogRef = this.dialog.open(DialogueComponent, {
      data: {
        type: "deleteEmployee"
      },
      disableClose: true,
      height: '30%',
      width: '40%'
    });
    dialogRef.afterClosed().subscribe(status => {
      if (status) {
        this.empService.deleteEmployee(element.id).subscribe((result)=>{
          this.loadEmployees();
          this.toastr.success('Employee deleted successfully');
        },
        (error) => {
          this.toastr.error('Falied to delete employee');
        })
      }else{
        return;
      }
    })
    
  }
  applyFilter() {
    if (this.departmentFilter.trim() === '') {
      // If the filter is empty, show all data
      this.dataSource.data = this.employeeData;
    } else {
      // Apply the filter using the pipe
      this.dataSource.data = this.departmentFilterPipe.transform(this.employeeData, this.departmentFilter);
    }
  }
  viewEmployeeDetails(employee: IEmployee) {
    this.selectedEmployee = employee;  // Set the selected employee
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 50); // Adjust the delay (50ms is a good starting point)  
  }

  
}
