/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'dash-dark': '#1a1a2e',      // Main background
        'dash-card': '#252545',      // Card background
        'dash-border': '#3a3a5e',    // Subtle borders
        'dash-accent': '#6c5ce7',    // Primary purple
        'dash-text-muted': '#a0a0c0' // Dimmed text
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      }
    },
  },
  plugins: [],
}