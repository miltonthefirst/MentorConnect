import { Routes } from '@angular/router'; 
import { LoginComponent } from './login/login-component/login-component';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];
