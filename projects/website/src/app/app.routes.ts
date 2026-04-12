import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/how-it-works.component').then((m) => m.HowItWorksComponent),
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact.component').then((m) => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
