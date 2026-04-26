import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'mc-website-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  templateUrl: './website-home-page.component.html',
  styleUrl: './website-home-page.component.scss',
})
export class WebsiteHomePage {
  protected readonly features = [
    {
      title: 'Smart Matching',
      description:
        'Our algorithm pairs you with mentors who align with your goals, interests, and learning style.',
      icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z',
    },
    {
      title: '1-on-1 Video Sessions',
      description:
        'Connect face-to-face with your mentor through seamless built-in video calls. No extra tools needed.',
      icon: 'M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z',
    },
    {
      title: 'Goal Tracking',
      description:
        'Set milestones, track progress, and celebrate achievements together with your mentor.',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    },
    {
      title: 'Flexible Scheduling',
      description:
        'Book sessions that fit your calendar. Morning, evening, or weekends - you choose.',
      icon: 'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5',
    },
    {
      title: 'Resource Library',
      description:
        'Access curated learning materials shared by mentors - articles, templates, and guides.',
      icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
    },
    {
      title: 'Community & Events',
      description:
        'Join workshops, webinars, and networking events. Connect with peers on the same journey.',
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
      quote:
        'MentorConnect changed my trajectory. My mentor helped me land my dream internship at a top tech company. The personalized guidance was invaluable.',
    },
    {
      name: 'James Rodriguez',
      role: 'UX Design Student',
      quote:
        'The smart matching found me a mentor who was exactly in the field I wanted to break into. Six months later, I had a portfolio that got me hired.',
    },
    {
      name: 'Priya Patel',
      role: 'Data Science Mentee',
      quote:
        'Flexible scheduling meant I could fit sessions around my coursework. The goal tracking kept me accountable and motivated throughout my journey.',
    },
  ];
}
