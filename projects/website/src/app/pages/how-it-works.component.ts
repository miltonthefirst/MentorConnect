import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-accent-300 uppercase tracking-wide">How It Works</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Three steps to your perfect mentor
        </h1>
        <p class="mt-6 text-lg text-brand-200 max-w-2xl mx-auto leading-relaxed">
          Getting started is quick and free. Our streamlined process connects you with the right mentor in minutes, not days.
        </p>
      </div>
    </section>

    <!-- Steps -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="space-y-20 lg:space-y-28">
          @for (step of steps; track step.number; let i = $index; let isOdd = $odd) {
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center" [class]="isOdd ? 'lg:direction-rtl' : ''">
              <!-- Content -->
              <div [class]="isOdd ? 'lg:order-2' : ''">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 text-brand-700 font-bold text-lg mb-6">
                  {{ step.number }}
                </div>
                <h2 class="text-2xl sm:text-3xl font-bold text-surface-900 tracking-tight">{{ step.title }}</h2>
                <p class="mt-4 text-lg text-surface-600 leading-relaxed">{{ step.description }}</p>
                <ul class="mt-6 space-y-3">
                  @for (detail of step.details; track detail) {
                    <li class="flex items-start gap-3">
                      <svg class="w-5 h-5 mt-0.5 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span class="text-surface-600">{{ detail }}</span>
                    </li>
                  }
                </ul>
              </div>

              <!-- Visual -->
              <div [class]="isOdd ? 'lg:order-1' : ''">
                <div class="rounded-2xl bg-gradient-to-br p-10 sm:p-14 flex items-center justify-center" [class]="step.bgClass">
                  <svg class="w-24 h-24 sm:w-32 sm:h-32" [class]="step.iconColor" fill="none" viewBox="0 0 24 24" stroke-width="0.75" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="step.icon" />
                  </svg>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- For Mentors vs Mentees -->
    <section class="py-20 sm:py-28 bg-surface-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">For Everyone</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Benefits for both sides</h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- For Students -->
          <div class="p-8 sm:p-10 rounded-2xl bg-white border border-surface-200 shadow-card">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-6">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              For Students
            </div>
            <h3 class="text-xl font-bold text-surface-900 mb-4">Accelerate your learning</h3>
            <ul class="space-y-4">
              @for (benefit of studentBenefits; track benefit) {
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span class="text-surface-600">{{ benefit }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- For Mentors -->
          <div class="p-8 sm:p-10 rounded-2xl bg-white border border-surface-200 shadow-card">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-sm font-medium mb-6">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              For Mentors
            </div>
            <h3 class="text-xl font-bold text-surface-900 mb-4">Make a real impact</h3>
            <ul class="space-y-4">
              @for (benefit of mentorBenefits; track benefit) {
                <li class="flex items-start gap-3">
                  <div class="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span class="text-surface-600">{{ benefit }}</span>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">FAQ</span>
          <h2 class="mt-3 text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Common questions</h2>
        </div>

        <div class="space-y-6">
          @for (faq of faqs; track faq.question) {
            <div class="p-6 rounded-xl border border-surface-200">
              <h3 class="text-base font-semibold text-surface-900">{{ faq.question }}</h3>
              <p class="mt-2 text-surface-600 leading-relaxed">{{ faq.answer }}</p>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-gradient-to-br from-brand-600 to-brand-800">
      <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Ready to get started?</h2>
        <p class="mt-4 text-lg text-brand-200">Sign up in under 2 minutes. Your first session is completely free.</p>
        <a
          href="/auth/register"
          class="mt-8 inline-block px-8 py-3.5 text-base font-semibold text-brand-700 bg-white hover:bg-brand-50 rounded-xl transition-colors shadow-lg"
        >
          Create Your Free Account
        </a>
      </div>
    </section>
  `,
})
export class HowItWorksComponent {
  protected readonly steps = [
    {
      number: 1,
      title: 'Create your profile',
      description: 'Tell us about your goals, interests, and what you want to learn. Our smart matching uses this to find your ideal mentor.',
      details: [
        'Takes less than 2 minutes',
        'Specify your learning goals and preferred topics',
        'Set your availability and timezone',
      ],
      icon: 'M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z',
      bgClass: 'from-brand-50 to-brand-100',
      iconColor: 'text-brand-400',
    },
    {
      number: 2,
      title: 'Get matched with a mentor',
      description: 'Our algorithm analyzes your profile and pairs you with mentors who have the expertise and experience you need.',
      details: [
        'Browse recommended mentors or search manually',
        'View mentor profiles, ratings, and specializations',
        'Choose the mentor that feels right for you',
      ],
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z',
      bgClass: 'from-accent-50 to-accent-100',
      iconColor: 'text-accent-400',
    },
    {
      number: 3,
      title: 'Start your sessions',
      description: 'Book your first session, connect via built-in video, and start making progress on your goals immediately.',
      details: [
        'Flexible scheduling - book times that work for you',
        'Built-in video calls, notes, and goal tracking',
        'Ongoing support between sessions via chat',
      ],
      icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
      bgClass: 'from-purple-50 to-purple-100',
      iconColor: 'text-purple-400',
    },
  ];

  protected readonly studentBenefits = [
    'Get personalized guidance from industry professionals',
    'Build confidence and clarity in your career path',
    'Access exclusive resources and learning materials',
    'Expand your professional network organically',
    'Track your progress with measurable milestones',
  ];

  protected readonly mentorBenefits = [
    'Give back and shape the next generation of talent',
    'Develop your leadership and coaching skills',
    'Build your personal brand as a thought leader',
    'Flexible commitment - mentor on your own schedule',
    'Join a community of like-minded professionals',
  ];

  protected readonly faqs = [
    {
      question: 'Is MentorConnect free for students?',
      answer: 'Yes! Students can create an account and get matched for free. We offer a generous free tier with limited sessions per month, and affordable premium plans for more access.',
    },
    {
      question: 'How are mentors vetted?',
      answer: 'Every mentor goes through a verification process. We check professional credentials, conduct interviews, and continuously monitor feedback from mentees to ensure quality.',
    },
    {
      question: 'How long are mentorship sessions?',
      answer: 'Sessions are typically 30 or 60 minutes, depending on what works best for both the mentor and mentee. You set the agenda together.',
    },
    {
      question: 'Can I switch mentors?',
      answer: 'Absolutely. If you feel like a different mentor would be a better fit, you can browse our directory and switch at any time - no questions asked.',
    },
    {
      question: 'What industries are covered?',
      answer: 'We have mentors across 40+ industries including tech, design, finance, healthcare, marketing, and many more. If your field isn\'t listed, reach out and we\'ll find someone for you.',
    },
  ];
}
