import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebase } from 'auth';
import { environment } from 'environments/environment';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideFirebase({
      config: environment.firebase,
      useEmulators: environment.useEmulators,
      emulators: environment.emulators,
    }),
  ],
};
