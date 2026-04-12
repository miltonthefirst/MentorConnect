import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected readonly mobileMenuOpen = signal(false);

  protected readonly navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/about', label: 'About', exact: false },
    { path: '/how-it-works', label: 'How It Works', exact: false },
    { path: '/pricing', label: 'Pricing', exact: false },
    { path: '/contact', label: 'Contact', exact: false },
  ];
}
