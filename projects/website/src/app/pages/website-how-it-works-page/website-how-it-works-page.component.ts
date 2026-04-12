import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mc-website-how-it-works-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  templateUrl: './website-how-it-works-page.component.html',
  styleUrl: './website-how-it-works-page.component.scss',
})
export class WebsiteHowItWorksPage {
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
