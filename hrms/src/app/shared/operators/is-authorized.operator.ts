import {AuthService} from '../../services/auth.service';
import {inject} from '@angular/core';
import {filter, map, MonoTypeOperatorFunction, pipe, withLatestFrom} from 'rxjs';

export function isAuthorized<T>(
  authService = inject(AuthService)
): MonoTypeOperatorFunction<T> {
  return pipe(
    withLatestFrom(authService.isAuth$),
    filter(([_, isAuth]) => {
      if (!isAuth) {
        console.warn('Unauthorized operation attempted');
      }
      return isAuth;
    }),
    map(([value, _]) => value)
  );
}
