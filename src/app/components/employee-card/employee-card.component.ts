import { Component, Input } from '@angular/core';
import { IEmployee } from '../../Models/employee';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() employee: IEmployee | null = null; 

}
