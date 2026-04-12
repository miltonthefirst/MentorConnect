import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-accent-300 uppercase tracking-wide">About Us</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          We believe mentorship changes lives
        </h1>
        <p class="mt-6 text-lg text-brand-200 max-w-2xl mx-auto leading-relaxed">
          MentorConnect was born from a simple idea: every student deserves access to guidance from someone who has walked the path before them.
        </p>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">Our Mission</span>
            <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
              Democratizing access to mentorship
            </h2>
            <p class="mt-6 text-lg text-surface-600 leading-relaxed">
              We're building a world where geography, socioeconomic status, or network don't determine whether you get great guidance. Our platform connects students with mentors across industries, making high-quality mentorship accessible to everyone.
            </p>
            <p class="mt-4 text-lg text-surface-600 leading-relaxed">
              Whether you're a first-generation college student or switching careers, MentorConnect ensures you have someone in your corner who truly understands your journey.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-6">
            @for (value of values; track value.title) {
              <div class="p-6 rounded-2xl bg-surface-50 border border-surface-200">
                <div class="w-10 h-10 rounded-lg bg-brand-100 text-brand-600 flex items-center justify-center mb-4">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="value.icon" />
                  </svg>
                </div>
                <h3 class="text-base font-semibold text-surface-900 mb-1">{{ value.title }}</h3>
                <p class="text-sm text-surface-500">{{ value.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>

    <!-- Story -->
    <section class="py-20 sm:py-28 bg-surface-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">Our Story</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
            From a dorm room idea to thousands of connections
          </h2>
          <div class="mt-8 text-left space-y-6 text-lg text-surface-600 leading-relaxed">
            <p>
              MentorConnect started in 2024 when our founding team - a group of students frustrated by the lack of accessible mentorship - decided to build the solution themselves.
            </p>
            <p>
              Having experienced firsthand how a single conversation with the right mentor could shift your entire career trajectory, we set out to make those conversations happen at scale.
            </p>
            <p>
              Today, MentorConnect serves over 1,200 students and 350 mentors across 40+ industries. We've facilitated more than 15,000 mentorship sessions, and we're just getting started.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">Our Team</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">
            The people behind MentorConnect
          </h2>
          <p class="mt-4 text-lg text-surface-500 max-w-2xl mx-auto">
            A passionate team of builders, educators, and dreamers committed to transforming mentorship.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          @for (member of team; track member.name) {
            <div class="text-center group">
              <div class="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-brand-100 to-brand-200 flex items-center justify-center text-3xl font-bold text-brand-600 mb-4 group-hover:scale-105 transition-transform">
                {{ member.name.charAt(0) }}
              </div>
              <h3 class="text-base font-semibold text-surface-900">{{ member.name }}</h3>
              <p class="text-sm text-brand-600 font-medium">{{ member.role }}</p>
              <p class="mt-2 text-sm text-surface-500">{{ member.bio }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-brand-600 to-brand-800">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Join our mission</h2>
        <p class="mt-4 text-lg text-brand-200">
          Whether you're a student looking for guidance or a professional ready to give back, there's a place for you here.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/auth/register"
            class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-brand-700 bg-white hover:bg-brand-50 rounded-xl transition-colors shadow-lg"
          >
            Get Started
          </a>
          <a
            routerLink="/contact"
            class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
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
