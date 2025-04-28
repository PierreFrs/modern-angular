import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login.component";
import {EmployeeService} from './services/employee.service';
import {WorkService} from './services/work.service';
import {RecruitmentService} from './services/recruitment.service';
import {authGuard} from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '/login', component: LoginComponent },
  { path: '/registration', loadComponent: () => {
      return import('./pages/registration.component').then(
        (m) => m.RegistrationComponent);
    } },
  { path: 'employees',
    providers: [EmployeeService],
    canActivate: [authGuard],
    loadChildren: () => {
      return import('./pages/employees/employees.routes').then(
          (m) => m.routes,
        );
    } },
  { path: 'work',
    providers: [WorkService],
    loadChildren: () => {
      return import('./pages/work/work.routes').then(
        (m) => m.routes,
      )
    } },
  { path: 'recruitment',
    providers: [RecruitmentService],
    loadChildren: () => {
    return import('./pages/recruitment/recruitment.routes').then(
      (m) => m.routes,
      )
    } },
];
