import {Component, inject} from '@angular/core';
import {PermissionsService} from '../../services/permissions.service';
import {EmployeeForm} from '../../infrastructure/types/employee-form';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-employee',
  template: ``,
  standalone: true
})
export class EditEmployeeComponent {
  permissionsService = inject(PermissionsService);
  form = new FormGroup<EmployeeForm>({
    firstName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    lastName: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    position: new FormControl('', {nonNullable: true}),
    level: new FormControl('', {nonNullable: true}),
  });

  constructor() {
    this.permissionsService.hasPermission('EditEmployeePrivateDetails').pipe(
      takeUntilDestroyed(),
    ).subscribe(hasPermission => {
      if (!hasPermission) {
        this.form.controls.firstName.disable();
        this.form.controls.lastName.disable();
        this.form.controls.email.disable();
      } else {
        this.form.controls.firstName.enable();
        this.form.controls.lastName.enable();
        this.form.controls.email.enable();
      }
    })
  }
}
