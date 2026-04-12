import { Routes } from '@angular/router';
import { authGuard, authRoutes } from 'auth';
import { MenteeDashboardPage } from './mentee-dashboard-page/mentee-dashboard-page';

export const routes: Routes = [
  { path: 'auth', children: authRoutes },
  { path: 'dashboard', component: MenteeDashboardPage, canActivate: [authGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
