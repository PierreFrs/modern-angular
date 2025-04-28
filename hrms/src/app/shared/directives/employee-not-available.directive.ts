import {AfterViewInit, Directive, inject} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';
import {EmployeeService} from '../../services/employee.service';

@Directive({
  selector: 'a[routerLink]',
  hostDirectives: [NgClass],
  standalone: true,
})
export class EmployeeNotAvailableDirective implements AfterViewInit {
  private readonly ngClassRef = inject(NgClass);
  private readonly routerLinkRef = inject(RouterLink);
  private readonly employeeService = inject(EmployeeService);

  ngAfterViewInit() {
    if (
      this.routerLinkRef
        .href!.startsWith('/employees/details')
    ) {
      const employeeId = this.routerLinkRef
        .urlTree?.root.children['primary']
        ?.segments.at(-1)?.path;

      if (employeeId) {
        this.employeeService.getEmployee(+employeeId).subscribe(employee => {
          this.ngClassRef.ngClass = {
            'not-available': !employee.isAvailable
          };
        });
      }
    }
  }


}
