import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/website-home-page/website-home-page.component').then(
        (m) => m.WebsiteHomePage,
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/website-about-page/website-about-page.component').then(
        (m) => m.WebsiteAboutPage,
      ),
  },
  {
    path: 'how-it-works',
    loadComponent: () =>
      import('./pages/website-how-it-works-page/website-how-it-works-page.component').then(
        (m) => m.WebsiteHowItWorksPage,
      ),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/website-pricing-page/website-pricing-page.component').then(
        (m) => m.WebsitePricingPage,
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/website-contact-page/website-contact-page.component').then(
        (m) => m.WebsiteContactPage,
      ),
  },
  { path: '**', redirectTo: '' },
];
