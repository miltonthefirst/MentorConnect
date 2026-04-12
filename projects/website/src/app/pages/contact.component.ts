import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule],
  template: `
    <!-- Hero -->
    <section class="relative bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-sm font-semibold text-accent-300 uppercase tracking-wide">Contact</span>
        <h1 class="mt-3 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Get in touch
        </h1>
        <p class="mt-6 text-lg text-brand-200 max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, or a partnership idea? We'd love to hear from you.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-20 sm:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-16">
          <!-- Contact Info -->
          <div class="lg:col-span-2">
            <h2 class="text-2xl font-bold text-surface-900 mb-6">Let's connect</h2>
            <p class="text-surface-600 leading-relaxed mb-8">
              Whether you're a student, mentor, or organization, we're here to help. Reach out and our team will get back to you within 24 hours.
            </p>

            <div class="space-y-6">
              @for (info of contactInfo; track info.label) {
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="info.icon" />
                    </svg>
                  </div>
                  <div>
                    <div class="text-sm font-semibold text-surface-900">{{ info.label }}</div>
                    <div class="text-sm text-surface-500 mt-0.5">{{ info.value }}</div>
                  </div>
                </div>
              }
            </div>

            <!-- Social -->
            <div class="mt-10">
              <h3 class="text-sm font-semibold text-surface-900 mb-4">Follow us</h3>
              <div class="flex items-center gap-3">
                @for (social of socials; track social.label) {
                  <a
                    [href]="social.url"
                    [attr.aria-label]="social.label"
                    class="w-10 h-10 rounded-lg bg-surface-100 text-surface-600 flex items-center justify-center hover:bg-brand-50 hover:text-brand-600 transition-colors"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path [attr.fill-rule]="social.fillRule" [attr.d]="social.icon" [attr.clip-rule]="social.clipRule" />
                    </svg>
                  </a>
                }
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-3">
            <div class="p-8 sm:p-10 rounded-2xl bg-surface-50 border border-surface-200">
              @if (submitted()) {
                <div class="text-center py-12">
                  <div class="w-16 h-16 mx-auto rounded-full bg-accent-100 text-accent-600 flex items-center justify-center mb-6">
                    <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-surface-900 mb-2">Message sent!</h3>
                  <p class="text-surface-500">We'll get back to you within 24 hours.</p>
                  <button
                    type="button"
                    (click)="resetForm()"
                    class="mt-6 px-6 py-2.5 text-sm font-medium text-brand-600 border border-brand-200 rounded-xl hover:bg-brand-50 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              } @else {
                <h3 class="text-xl font-bold text-surface-900 mb-6">Send us a message</h3>
                <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label for="firstName" class="block text-sm font-medium text-surface-700 mb-1.5">
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        formControlName="firstName"
                        autocomplete="given-name"
                        class="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label for="lastName" class="block text-sm font-medium text-surface-700 mb-1.5">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        formControlName="lastName"
                        autocomplete="family-name"
                        class="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label for="contactEmail" class="block text-sm font-medium text-surface-700 mb-1.5">
                      Email
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      formControlName="email"
                      autocomplete="email"
                      class="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                      placeholder="you@example.com"
                    />
                    @if (form.controls.email.touched && form.controls.email.errors) {
                      <p class="mt-1 text-sm text-red-600">Please enter a valid email address.</p>
                    }
                  </div>

                  <div>
                    <label for="subject" class="block text-sm font-medium text-surface-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      formControlName="subject"
                      class="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white text-surface-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="general">General Inquiry</option>
                      <option value="student">I'm a Student</option>
                      <option value="mentor">I Want to Mentor</option>
                      <option value="partnership">Partnership</option>
                      <option value="enterprise">Enterprise / Schools</option>
                      <option value="support">Support</option>
                    </select>
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-surface-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      formControlName="message"
                      rows="5"
                      class="w-full px-4 py-3 rounded-xl border border-surface-300 bg-white text-surface-900 placeholder-surface-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none"
                      placeholder="Tell us how we can help…"
                    ></textarea>
                    @if (form.controls.message.touched && form.controls.message.errors) {
                      <p class="mt-1 text-sm text-red-600">Message is required.</p>
                    }
                  </div>

                  <button
                    type="submit"
                    [disabled]="form.invalid"
                    class="w-full py-3 px-4 rounded-xl bg-brand-600 text-white font-semibold hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message
                  </button>
                </form>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  protected readonly submitted = signal(false);

  protected readonly form = this.fb.nonNullable.group({
    firstName: [''],
    lastName: [''],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  protected readonly contactInfo = [
    {
      label: 'Email',
      value: 'hello@mentorconnect.io',
      icon: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75',
    },
    {
      label: 'Office',
      value: 'San Francisco, CA',
      icon: 'M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z',
    },
    {
      label: 'Hours',
      value: 'Mon – Fri, 9 AM – 6 PM PST',
      icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    },
  ];

  protected readonly socials = [
    {
      label: 'Twitter',
      url: '#',
      icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
      fillRule: undefined,
      clipRule: undefined,
    },
    {
      label: 'LinkedIn',
      url: '#',
      icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
      fillRule: undefined,
      clipRule: undefined,
    },
    {
      label: 'GitHub',
      url: '#',
      icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
      fillRule: 'evenodd' as const,
      clipRule: 'evenodd' as const,
    },
  ];

  onSubmit(): void {
    if (this.form.invalid) return;
    this.submitted.set(true);
  }

  resetForm(): void {
    this.form.reset();
    this.submitted.set(false);
  }
}
