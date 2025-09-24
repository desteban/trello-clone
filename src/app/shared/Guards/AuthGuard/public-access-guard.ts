import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AppRoutes } from '@shared/Routes';
import { AuthService } from '@shared/services/Auth/auth-service';

export const publicAccessGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService: AuthService = inject(AuthService);

  if (authService.isAuthenticated) {
    router.navigate([`/${AppRoutes.boards}`]);
    return false;
  }
  return true;
};
