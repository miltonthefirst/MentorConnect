/**
 * DEFAULT environment — points to LOCAL Firebase Emulators.
 * This file is committed and safe to share.
 *
 * Run `npm run emulators` before serving any app locally.
 */

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export interface Environment {
  production: boolean;
  firebase: FirebaseConfig;
  useEmulators: boolean;
  emulators?: {
    auth: { host: string; port: number };
    firestore: { host: string; port: number };
  };
}

export const environment: Environment = {
  production: false,
  firebase: {
    // Demo project ID — no real keys needed for emulators.
    apiKey: 'fake-api-key-for-emulator',
    authDomain: 'demo-mentor-connect.firebaseapp.com',
    projectId: 'demo-mentor-connect',
    storageBucket: 'demo-mentor-connect.appspot.com',
    messagingSenderId: '000000000000',
    appId: '1:000000000000:web:0000000000000000000000',
  },
  useEmulators: true,
  emulators: {
    auth: { host: 'localhost', port: 9099 },
    firestore: { host: 'localhost', port: 8080 },
  },
};
