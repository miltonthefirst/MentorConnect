import { Routes } from '@angular/router';  
import { HomeComponent } from './dashboard/pages/home-component/home-component';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent
  },
];
