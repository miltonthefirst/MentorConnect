import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-website-pricing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './website-pricing-page.component.html',
  styleUrl: './website-pricing-page.component.scss',
})
export class WebsitePricingPage {
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
      answer:
        "Yes, you can cancel your Pro subscription at any time. You'll retain access until the end of your billing period.",
    },
    {
      question: 'Is there a free trial for Pro?',
      answer:
        'Yes! Pro comes with a 14-day free trial. No credit card required to start. You can upgrade or stay on Free after the trial ends.',
    },
    {
      question: 'Do mentors pay anything?',
      answer:
        'No. MentorConnect is completely free for mentors. We believe in making it easy for professionals to give back.',
    },
    {
      question: 'Are there student discounts?',
      answer:
        'Yes, we offer a 50% student discount on the Pro plan. Just verify your student email during signup.',
    },
  ];
}
