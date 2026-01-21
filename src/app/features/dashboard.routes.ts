import { Routes } from '@angular/router';  
import { HomeComponent } from './dashboard/pages/home-component/home-component';
import { ProgressTracking } from './progress-tracking/progress-tracking';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent
  },
  {
    path: 'progress-tracking',
    component: ProgressTracking
  },
];
