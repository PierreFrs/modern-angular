import {Component, Input, OnChanges} from '@angular/core';
import {Employee} from '../../infrastructure/types/employee';

@Component({
  selector: 'app-user-badge',
  template: `
    <span class="badge badge-{{ badgeIcon }}"></span>
  `,
  standalone: true
})
export class UserBadgeComponent implements OnChanges {
  @Input() user!: Employee;
  badgeIcon: string = 'employee';

  ngOnChanges() {
    this.determineBadgeIcon();
  }

  private determineBadgeIcon() {
    if (!this.user?.role) return;

    switch (this.user.role.toLowerCase()) {
      case 'admin':
        this.badgeIcon = 'admin';
        break;
      case 'hr':
        this.badgeIcon = 'hr';
        break;
      default:
        this.badgeIcon = 'employee';
    }
  }

}
