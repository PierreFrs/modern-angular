import {Routes} from '@angular/router';
import {EmployeeListComponent} from './employee-list.component';
import {EmployeeDetailsComponent} from './employee-details.component';
import {CreateEmployeeComponent} from './create-employee.component';
import {EditEmployeeComponent} from './edit-employee.component';
import {employeeDetailsResolver} from '../../shared/resolvers/employee-details.resolver';
import {hasPermission} from '../../shared/guards/has-permission.guard';

export const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'details/:id',
    component: EmployeeDetailsComponent,
    resolve: { employee: employeeDetailsResolver }
  },
  { path: 'create',
    canActivate: [hasPermission('CreateEmployee')],
    component: CreateEmployeeComponent },
  { path: 'edit',
    canActivate: [hasPermission('EditEmployee')],
    component: EditEmployeeComponent },
]
