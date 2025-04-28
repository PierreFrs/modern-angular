import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EmployeeForm} from '../../infrastructure/types/employee-form';

@Component({
  selector: 'app-employee-create',
  template: ``,
  standalone: true,
})
export class CreateEmployeeComponent {
  form = new FormGroup<EmployeeForm>({
    firstName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    lastName: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    email: new FormControl('', {nonNullable: true, validators: [Validators.required, Validators.email]}),
    position: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    level: new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  });
}
