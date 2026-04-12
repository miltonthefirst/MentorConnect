import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-accent-300 uppercase tracking-wide">Pricing</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Simple, transparent pricing
        </h1>
        <p class="mt-6 text-lg text-brand-200 max-w-2xl mx-auto leading-relaxed">
          Start free and scale as you grow. No hidden fees, no surprise charges. Cancel anytime.
        </p>
      </div>
    </section>

    <!-- Plans -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          @for (plan of plans; track plan.name) {
            <div
              class="relative p-8 rounded-2xl border-2 flex flex-col"
              [class]="plan.featured
                ? 'border-brand-600 shadow-elevated bg-white'
                : 'border-surface-200 bg-white'"
            >
              @if (plan.featured) {
                <div class="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span class="inline-flex px-4 py-1 rounded-full bg-brand-600 text-white text-xs font-semibold uppercase tracking-wide">
                    Most Popular
                  </span>
                </div>
              }

              <div class="mb-6">
                <h3 class="text-lg font-semibold text-surface-900">{{ plan.name }}</h3>
                <p class="mt-1 text-sm text-surface-500">{{ plan.description }}</p>
              </div>

              <div class="mb-6">
                <span class="text-4xl font-extrabold text-surface-900">{{ plan.price }}</span>
                @if (plan.period) {
                  <span class="text-surface-500 text-sm">/{{ plan.period }}</span>
                }
              </div>

              <a
                [href]="plan.featured ? '/auth/register' : plan.cta === 'Contact Sales' ? '/contact' : '/auth/register'"
                class="block w-full text-center py-3 px-4 rounded-xl font-semibold text-sm transition-colors mb-8"
                [class]="plan.featured
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-surface-100 text-surface-700 hover:bg-surface-200'"
              >
                {{ plan.cta }}
              </a>

              <ul class="space-y-3 flex-1">
                @for (feature of plan.features; track feature) {
                  <li class="flex items-start gap-3">
                    <svg class="w-5 h-5 mt-0.5 shrink-0" [class]="plan.featured ? 'text-brand-600' : 'text-accent-500'" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span class="text-sm text-surface-600">{{ feature }}</span>
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section class="py-20 sm:py-28 bg-surface-50">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Compare plans</h2>
          <p class="mt-4 text-lg text-surface-500">See exactly what you get with each plan.</p>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead>
              <tr class="border-b border-surface-200">
                <th class="py-4 pr-4 text-sm font-semibold text-surface-900">Feature</th>
                <th class="py-4 px-4 text-sm font-semibold text-surface-900 text-center">Free</th>
                <th class="py-4 px-4 text-sm font-semibold text-brand-600 text-center">Pro</th>
                <th class="py-4 pl-4 text-sm font-semibold text-surface-900 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              @for (row of comparisonRows; track row.feature) {
                <tr class="border-b border-surface-100">
                  <td class="py-4 pr-4 text-sm text-surface-700">{{ row.feature }}</td>
                  <td class="py-4 px-4 text-sm text-surface-600 text-center">{{ row.free }}</td>
                  <td class="py-4 px-4 text-sm text-surface-600 text-center font-medium">{{ row.pro }}</td>
                  <td class="py-4 pl-4 text-sm text-surface-600 text-center">{{ row.enterprise }}</td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-surface-900 tracking-tight">Pricing FAQ</h2>
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
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Start your free account today</h2>
        <p class="mt-4 text-lg text-brand-200">No credit card required. Upgrade when you're ready.</p>
        <a
          href="/auth/register"
          class="mt-8 inline-block px-8 py-3.5 text-base font-semibold text-brand-700 bg-white hover:bg-brand-50 rounded-xl transition-colors shadow-lg"
        >
          Get Started for Free
        </a>
      </div>
    </section>
  `,
})
export class PricingComponent {
  protected readonly plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: '$0',
      period: 'month',
      cta: 'Start Free',
      featured: false,
      features: [
        '2 sessions per month',
        'Smart mentor matching',
        'In-app messaging',
        'Goal tracking (basic)',
        'Community access',
      ],
    },
    {
      name: 'Pro',
      description: 'For serious learners',
      price: '$19',
      period: 'month',
      cta: 'Start Pro Trial',
      featured: true,
      features: [
        'Unlimited sessions',
        'Priority mentor matching',
        'Video call recordings',
        'Advanced goal tracking',
        'Resource library access',
        'Session notes & summaries',
        'Priority support',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For schools & organizations',
      price: 'Custom',
      period: '',
      cta: 'Contact Sales',
      featured: false,
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'Custom mentor pools',
        'Analytics dashboard',
        'SSO & admin controls',
        'API access',
        'Branded experience',
      ],
    },
  ];

  protected readonly comparisonRows = [
    { feature: 'Monthly sessions', free: '2', pro: 'Unlimited', enterprise: 'Unlimited' },
    { feature: 'Mentor matching', free: 'Basic', pro: 'Priority AI', enterprise: 'Custom pools' },
    { feature: 'Video calls', free: '30 min', pro: '60 min', enterprise: '60 min' },
    { feature: 'Session recordings', free: '-', pro: '✓', enterprise: '✓' },
    { feature: 'Goal tracking', free: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
    { feature: 'Resource library', free: '-', pro: '✓', enterprise: '✓' },
    { feature: 'Analytics', free: '-', pro: 'Personal', enterprise: 'Org-wide' },
    { feature: 'Support', free: 'Community', pro: 'Priority', enterprise: 'Dedicated' },
  ];

  protected readonly faqs = [
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your Pro subscription at any time. You\'ll retain access until the end of your billing period.',
    },
    {
      question: 'Is there a free trial for Pro?',
      answer: 'Yes! Pro comes with a 14-day free trial. No credit card required to start. You can upgrade or stay on Free after the trial ends.',
    },
    {
      question: 'Do mentors pay anything?',
      answer: 'No. MentorConnect is completely free for mentors. We believe in making it easy for professionals to give back.',
    },
    {
      question: 'Are there student discounts?',
      answer: 'Yes, we offer a 50% student discount on the Pro plan. Just verify your student email during signup.',
    },
  ];
}
