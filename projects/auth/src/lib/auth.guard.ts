import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, map, first } from 'rxjs';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return toObservable(authService.state).pipe(
    filter((state) => state !== 'loading'),
    first(),
    map((state) => {
      if (state === 'authenticated') {
        return true;
      }
      return router.createUrlTree(['/auth/login']);
    }),
  );
};

export const publicGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return toObservable(authService.state).pipe(
    filter((state) => state !== 'loading'),
    first(),
    map((state) => {
      if (state !== 'authenticated') {
        return true;
      }
      return router.createUrlTree(['/dashboard']);
    }),
  );
};
