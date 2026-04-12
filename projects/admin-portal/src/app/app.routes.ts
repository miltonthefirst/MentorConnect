import { Routes } from '@angular/router';
import { authGuard, authRoutes } from 'auth';
import { AdminDashboardPage } from './admin-dashboard-page/admin-dashboard-page';

export const routes: Routes = [
  { path: 'auth', children: authRoutes },
  { path: 'dashboard', component: AdminDashboardPage, canActivate: [authGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
