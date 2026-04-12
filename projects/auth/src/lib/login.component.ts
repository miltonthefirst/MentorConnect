import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'mc-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  protected readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);

  protected readonly submitting = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;
    this.submitting.set(true);
    const { email, password } = this.form.getRawValue();
    const success = await this.authService.loginWithEmail(email, password);
    this.submitting.set(false);
    if (success) {
      this.router.navigate(['/dashboard']);
    }
  }

  async onGoogleSignIn(): Promise<void> {
    this.submitting.set(true);
    const success = await this.authService.loginWithGoogle();
    this.submitting.set(false);
    if (success) {
      this.router.navigate(['/dashboard']);
    }
  }
}
