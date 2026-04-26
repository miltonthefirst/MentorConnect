import { Injectable, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  Auth,
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase.providers';
import { AuthUser, AuthState } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly auth = inject(FIREBASE_AUTH);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly _user = signal<AuthUser | null>(null);
  private readonly _state = signal<AuthState>('loading');
  private readonly _error = signal<string | null>(null);

  readonly user = this._user.asReadonly();
  readonly state = this._state.asReadonly();
  readonly error = this._error.asReadonly();
  readonly isAuthenticated = computed(() => this._state() === 'authenticated');
  readonly isLoading = computed(() => this._state() === 'loading');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.listenToAuthState();
    } else {
      this._state.set('unauthenticated');
    }
  }

  private listenToAuthState(): void {
    onAuthStateChanged(this.auth, (firebaseUser) => {
      if (firebaseUser) {
        this._user.set(this.mapUser(firebaseUser));
        this._state.set('authenticated');
      } else {
        this._user.set(null);
        this._state.set('unauthenticated');
      }
    });
  }

  async loginWithEmail(email: string, password: string): Promise<boolean> {
    this._error.set(null);
    try {
      const credential = await signInWithEmailAndPassword(this.auth, email, password);
      this._user.set(this.mapUser(credential.user));
      this._state.set('authenticated');
      return true;
    } catch (err) {
      this._error.set(this.getErrorMessage(err));
      return false;
    }
  }

  async registerWithEmail(email: string, password: string, displayName: string): Promise<boolean> {
    this._error.set(null);
    try {
      const credential = await createUserWithEmailAndPassword(this.auth, email, password);
      await updateProfile(credential.user, { displayName });
      this._user.set(this.mapUser(credential.user));
      this._state.set('authenticated');
      return true;
    } catch (err) {
      this._error.set(this.getErrorMessage(err));
      return false;
    }
  }

  async loginWithGoogle(): Promise<boolean> {
    this._error.set(null);
    try {
      const provider = new GoogleAuthProvider();
      const credential = await signInWithPopup(this.auth, provider);
      this._user.set(this.mapUser(credential.user));
      this._state.set('authenticated');
      return true;
    } catch (err) {
      this._error.set(this.getErrorMessage(err));
      return false;
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this._user.set(null);
    this._state.set('unauthenticated');
  }

  clearError(): void {
    this._error.set(null);
  }

  private mapUser(user: User): AuthUser {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
  }

  private getErrorMessage(err: unknown): string {
    const code = (err as { code?: string }).code ?? '';
    switch (code) {
      case 'auth/user-not-found':
        return 'No account found with this email address.';
      case 'auth/wrong-password':
        return 'Incorrect password. Please try again.';
      case 'auth/invalid-credential':
        return 'Invalid email or password. Please try again.';
      case 'auth/email-already-in-use':
        return 'An account with this email already exists.';
      case 'auth/weak-password':
        return 'Password must be at least 6 characters.';
      case 'auth/invalid-email':
        return 'Please enter a valid email address.';
      case 'auth/too-many-requests':
        return 'Too many failed attempts. Please try again later.';
      case 'auth/popup-closed-by-user':
        return 'Sign-in popup was closed. Please try again.';
      default:
        return 'An unexpected error occurred. Please try again.';
    }
  }
}
