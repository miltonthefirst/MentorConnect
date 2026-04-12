import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth';
import type { AuthUser } from 'auth';

@Component({
  selector: 'mentee-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mentee-dashboard-page.html',
  styleUrl: './mentee-dashboard-page.scss',
})
export class MenteeDashboardPage {
  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly currentUser = computed<AuthUser | null>(() => this.authService.user());

  async onLogout(): Promise<void> {
    await this.authService.logout();
    await this.router.navigate(['/auth/login']);
  }
}
