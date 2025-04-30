import {PermissionsService} from '../../services/permissions.service';
import {inject} from '@angular/core';
import {filter, map, MonoTypeOperatorFunction, pipe, withLatestFrom} from 'rxjs';
import {Permissions} from '../../infrastructure/types/permissions';

export function hasPermissions<T>(
  permissions: Permissions[],
  permissionsService = inject(PermissionsService),
  ): MonoTypeOperatorFunction<T> {
    return pipe(
      withLatestFrom(permissionsService.hasPermissions(permissions)),
      filter(([, hasPermissions]) => hasPermissions),
      map(([value]) => value)
    )
}
