import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-website-about-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './website-about-page.component.html',
  styleUrl: './website-about-page.component.scss',
})
export class WebsiteAboutPage {
  protected readonly values = [
    {
      title: 'Accessibility',
      description: 'Mentorship for everyone, regardless of background.',
      icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418',
    },
    {
      title: 'Quality',
      description: 'Vetted mentors who are experts in their fields.',
      icon: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    },
    {
      title: 'Impact',
      description: 'Measurable outcomes that drive real career growth.',
      icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    },
    {
      title: 'Community',
      description: 'A supportive network that uplifts each other.',
      icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    },
  ];

  protected readonly team = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Co-founder',
      bio: 'Former educator turned tech entrepreneur. Passionate about equal access to opportunity.',
    },
    {
      name: 'Jordan Lee',
      role: 'CTO & Co-founder',
      bio: 'Full-stack engineer with a mission to build tech that empowers learners worldwide.',
    },
    {
      name: 'Maya Singh',
      role: 'Head of Product',
      bio: 'UX expert focused on creating intuitive experiences that mentors and students love.',
    },
    {
      name: 'Chris Okafor',
      role: 'Head of Community',
      bio: 'Community builder who has connected thousands of students with life-changing mentors.',
    },
  ];
}
