import {Component, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Employee} from '../../infrastructure/types/employee';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {UserBadgeComponent} from '../../shared/components/user-badge.component';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Details</h2>
    <div>
      <img [ngSrc]="employee.profilePicture" width="50" height="50" [alt]="employee.firstName" priority/>
      <label>First Name: </label>{{ employee.firstName }}
      <label>Last Name: </label>{{ employee.lastName }}
      <label>Position: </label>{{ employee.position }}
    </div>
  `,
  imports: [
    NgOptimizedImage,
    UserBadgeComponent,
    NgClass
  ],
  standalone: true
})
export class EmployeeDetailsComponent {
  employee = inject(ActivatedRoute).snapshot.data['employee'] as Employee;
}
