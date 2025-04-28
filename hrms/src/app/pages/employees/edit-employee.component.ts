import {Component, inject} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';

@Component({
  selector: 'app-edit-employee',
  template: ``,
  standalone: true
})
export class EditEmployeeComponent {
  private readonly employeeService = inject(EmployeeService);
}
