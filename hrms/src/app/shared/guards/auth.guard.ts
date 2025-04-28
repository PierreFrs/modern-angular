import {inject} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {CanActivateFn, Router} from '@angular/router';
import {map} from 'rxjs';

export const authGuard: CanActivateFn = () =>  {
  const authService = inject(AuthService);
  const router = inject(Router);

    return authService.isAuth$.pipe(
      map((isAuth) => isAuth || router.createUrlTree(['/login'])),
    );
}
