/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        termoblok: {
          css: {
            '--tw-prose-body' : '#f2f2f2',
            '--tw-prose-headings' : '#e2e8f0',
            '--tw-prose-lead' : '#f2f2f2',
            '--tw-prose-links' : theme('colors.purple[600]'),
            '--tw-prose-bold' : '#171717',
            '--tw-prose-counters' : '#737373',
            '--tw-prose-bullets' : '#ff5e3a',
            '--tw-prose-hr' : '#e5e5e5',
            '--tw-prose-quotes' : '#171717',
            '--tw-prose-quote-borders' : '#e5e5e5',
            '--tw-prose-captions' : '#737373',
            '--tw-prose-code' : '#171717',
            '--tw-prose-pre-code' : '#e5e5e5',
            '--tw-prose-pre-bg' : '#262626',
            '--tw-prose-th-borders' : '#d4d4d4',
            '--tw-prose-td-borders' : '#e5e5e5',
          },
        },
      }),
      colors: {
        orange: {
          lighter: '#FF9275',
          light: '#F36D4A',
          DEFAULT: '#E7461C',
          dark: '#B72F0B',
          darker: '#901E00',
        },
        indigo: {
          500: '#1C7ED5',
          600: '#235BD8',
          700: '#2B34DB'
        },
      }
    },
    
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),

  ],
}

