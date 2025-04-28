import {CanActivateFn} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';

export const hasPermission = (permission: string): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    return authService.hasPermission(permission);
  };
}
