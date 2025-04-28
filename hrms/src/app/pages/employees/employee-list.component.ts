import {Component, inject} from '@angular/core';
import {AsyncPipe, NgComponentOutlet, NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {EmployeeService} from '../../services/employee.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <table>
      <thead>
      <tr>
        <th>Full Name</th>
        <th>Position</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let employee of employees$ | async">
        <td>
          <img
            [ngSrc]="employee.profilePicture"
            width="20" height="20"/>
          <a [routerLink]="['/employees/details', employee.id]">
            {{ employee.firstName }} {{ employee.lastName }}
          </a>
        </td>
        <td>{{ employee.position }}</td>
        <td>
          <button (click)="showConfirmationDialog()">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <ng-container *ngComponentOutlet="confirmDialog"></ng-container>`,
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    NgComponentOutlet,
    NgOptimizedImage,
    RouterLink
  ],
})
export class EmployeeListComponent {
  employeeService = inject(EmployeeService);
  employees$ = this.employeeService.getEmployees();
  isConfirmationOpen = false;
  confirmDialog: any = null;

  async showConfirmationDialog() {
    this.confirmDialog = await import('../../shared/components/confirmation-dialog.component')
      .then((m) => m.ConfirmationDialogComponent)
    this.isConfirmationOpen = true;
  }
}
