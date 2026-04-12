import { InjectionToken, makeEnvironmentProviders, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, connectAuthEmulator } from 'firebase/auth';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface FirebaseProviderOptions {
  config: FirebaseConfig;
  useEmulators?: boolean;
  emulators?: {
    auth?: { host: string; port: number };
  };
}

export const FIREBASE_APP = new InjectionToken<FirebaseApp>('FIREBASE_APP');
export const FIREBASE_AUTH = new InjectionToken<Auth>('FIREBASE_AUTH');

export function provideFirebase(options: FirebaseProviderOptions) {
  const app = initializeApp(options.config);
  const auth = getAuth(app);

  let emulatorConnected = false;

  return makeEnvironmentProviders([
    { provide: FIREBASE_APP, useValue: app },
    {
      provide: FIREBASE_AUTH,
      useFactory: () => {
        const platformId = inject(PLATFORM_ID);
        if (
          isPlatformBrowser(platformId) &&
          options.useEmulators &&
          options.emulators?.auth &&
          !emulatorConnected
        ) {
          connectAuthEmulator(
            auth,
            `http://${options.emulators.auth.host}:${options.emulators.auth.port}`,
            { disableWarnings: true },
          );
          emulatorConnected = true;
        }
        return auth;
      },
    },
  ]);
}
