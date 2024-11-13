import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from '../../Models/employee';
import { MatTableDataSource } from '@angular/material/table';

@Pipe({
  name: 'departmentFilter'
})
export class DepartmentFilterPipe implements PipeTransform {

  transform(dataSource: MatTableDataSource<IEmployee> | IEmployee[], department: string): IEmployee[] {
    const employees = dataSource instanceof MatTableDataSource ? dataSource.filteredData : dataSource;

    if (!employees || !department) {
      return employees;
    }
    const searchTerm = department.toLowerCase();
    return employees.filter(employee =>
      employee.department.toLowerCase().includes(searchTerm)
    );
  }

}
