import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'auth';
import type { AuthUser } from 'auth';

@Component({
  selector: 'admin-dashboard-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './admin-dashboard-page.html',
  styleUrl: './admin-dashboard-page.scss',
})
export class AdminDashboardPage {
  protected readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  protected readonly currentUser = computed<AuthUser | null>(() => this.authService.user());

  async onLogout(): Promise<void> {
    await this.authService.logout();
    await this.router.navigate(['/auth/login']);
  }
}
