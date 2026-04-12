import { Routes } from '@angular/router';
import { authGuard, authRoutes } from 'auth';
import { MentorDashboardPage } from './mentor-dashboard-page/mentor-dashboard-page';

export const routes: Routes = [
  { path: 'auth', children: authRoutes },
  { path: 'dashboard', component: MentorDashboardPage, canActivate: [authGuard] },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];
