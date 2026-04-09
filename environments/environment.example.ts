/**
 * EXAMPLE environment file — template for real Firebase projects.
 *
 * HOW TO USE:
 *   1. Copy this file and rename it to the target environment:
 *        environment.dev.ts   → Firebase Development project
 *        environment.test.ts  → Firebase Test / Staging project
 *        environment.prod.ts  → Firebase Production project
 *   2. Ask the Team Lead for the Firebase configuration values.
 *   3. Paste them in below.
 *
 * ⚠️  NEVER commit environment.dev.ts, environment.test.ts, or environment.prod.ts.
 *     They are listed in .gitignore.
 */

import { Environment } from './environment';

export const environment: Environment = {
  production: false, // Set to true for environment.prod.ts

  firebase: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_PROJECT_ID.appspot.com',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
  },

  useEmulators: false,
};
