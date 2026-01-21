import { Routes } from '@angular/router';
import { HomeComponent } from './features/dashboard/pages/home-component/home-component';
import { AUTH_ROUTES } from './auth/auth.routes';
import { DASHBOARD_ROUTES } from './features/dashboard.routes';

export const routes: Routes = [
    ...AUTH_ROUTES,
  ...DASHBOARD_ROUTES,

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: 'dashboard',
   loadChildren: () => import('./features/dashboard.routes').then(m => m.DASHBOARD_ROUTES)
  }
];
