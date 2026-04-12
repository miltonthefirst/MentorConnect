import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div class="absolute inset-0 opacity-10" aria-hidden="true">
        <div class="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-400 blur-3xl"></div>
        <div class="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand-400 blur-3xl"></div>
      </div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-accent-300 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
          <span class="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
          Now in Early Access
        </span>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Find the perfect mentor to
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">accelerate your career</span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-brand-200 max-w-2xl mx-auto leading-relaxed">
          MentorConnect pairs ambitious students with experienced professionals for personalized 1-on-1 mentorship sessions that drive real results.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/auth/register"
            class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 rounded-xl transition-all shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40"
          >
            Start Learning Free
          </a>
          <a
            routerLink="/how-it-works"
            class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-xl transition-colors"
          >
            See How It Works
          </a>
        </div>

        <!-- Social proof -->
        <div class="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-brand-300">
          <div class="flex items-center gap-2">
            <div class="flex -space-x-2">
              @for (i of [1, 2, 3, 4, 5]; track i) {
                <div class="w-8 h-8 rounded-full bg-brand-700 border-2 border-brand-900 flex items-center justify-center text-xs text-white font-medium">
                  {{ ['J','S','A','M','K'][i - 1] }}
                </div>
              }
            </div>
            <span class="text-sm">1,200+ students</span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-brand-700"></div>
          <div class="flex items-center gap-1.5">
            <div class="flex text-yellow-400">
              @for (star of [1, 2, 3, 4, 5]; track star) {
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              }
            </div>
            <span class="text-sm">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">Why MentorConnect</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Everything you need to grow</h2>
          <p class="mt-4 text-lg text-surface-500">A complete platform designed to make mentorship accessible, effective, and meaningful.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (feature of features; track feature.title) {
            <div class="group relative p-8 rounded-2xl border border-surface-200 hover:border-brand-200 hover:shadow-elevated transition-all duration-300">
              <div class="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="feature.icon" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-surface-900 mb-2">{{ feature.title }}</h3>
              <p class="text-surface-500 leading-relaxed">{{ feature.description }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 bg-surface-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          @for (stat of stats; track stat.label) {
            <div class="text-center">
              <div class="text-3xl sm:text-4xl font-extrabold text-brand-600">{{ stat.value }}</div>
              <div class="mt-1 text-sm text-surface-500 font-medium">{{ stat.label }}</div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">Testimonials</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Loved by students and mentors</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (testimonial of testimonials; track testimonial.name) {
            <div class="p-8 rounded-2xl bg-surface-50 border border-surface-200">
              <div class="flex text-yellow-400 mb-4">
                @for (star of [1, 2, 3, 4, 5]; track star) {
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                }
              </div>
              <p class="text-surface-600 leading-relaxed mb-6">{{ testimonial.quote }}</p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-sm">
                  {{ testimonial.name.charAt(0) }}
                </div>
                <div>
                  <div class="text-sm font-semibold text-surface-900">{{ testimonial.name }}</div>
                  <div class="text-xs text-surface-500">{{ testimonial.role }}</div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 sm:py-28 bg-gradient-to-br from-brand-600 to-brand-800">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to accelerate your growth?</h2>
        <p class="mt-4 text-lg text-brand-200 max-w-2xl mx-auto">
          Join thousands of students already learning from industry experts. Your first session is on us.
        </p>
        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/auth/register"
            class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-brand-700 bg-white hover:bg-brand-50 rounded-xl transition-colors shadow-lg"
          >
            Get Started for Free
          </a>
          <a
            routerLink="/contact"
            class="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white border border-white/30 hover:bg-white/10 rounded-xl transition-colors"
          >
            Talk to Us
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {
  protected readonly features = [
    {
      title: 'Smart Matching',
      description: 'Our algorithm pairs you with mentors who align with your goals, interests, and learning style.',
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z',
    },
    {
      title: '1-on-1 Video Sessions',
      description: 'Connect face-to-face with your mentor through seamless built-in video calls. No extra tools needed.',
      icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
    },
    {
      title: 'Goal Tracking',
      description: 'Set milestones, track progress, and celebrate achievements together with your mentor.',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book sessions that fit your calendar. Morning, evening, or weekends - you choose.',
      icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    },
    {
      title: 'Resource Library',
      description: 'Access curated learning materials shared by mentors - articles, templates, and guides.',
      icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
    },
    {
      title: 'Community & Events',
      description: 'Join workshops, webinars, and networking events. Connect with peers on the same journey.',
      icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    },
  ];

  protected readonly stats = [
    { value: '1,200+', label: 'Active Students' },
    { value: '350+', label: 'Expert Mentors' },
    { value: '15,000+', label: 'Sessions Completed' },
    { value: '4.9/5', label: 'Average Rating' },
  ];

  protected readonly testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Computer Science Student',
      quote: 'MentorConnect changed my trajectory. My mentor helped me land my dream internship at a top tech company. The personalized guidance was invaluable.',
    },
    {
      name: 'James Rodriguez',
      role: 'UX Design Student',
      quote: 'The smart matching found me a mentor who was exactly in the field I wanted to break into. Six months later, I had a portfolio that got me hired.',
    },
    {
      name: 'Priya Patel',
      role: 'Data Science Mentee',
      quote: 'Flexible scheduling meant I could fit sessions around my coursework. The goal tracking kept me accountable and motivated throughout my journey.',
    },
  ];
}
