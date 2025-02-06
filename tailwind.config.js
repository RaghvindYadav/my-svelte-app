/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',    // Vibrant Purple
        secondary: '#2DD4BF',  // Teal
        accent: '#F43F5E',     // Rose
        neutral: '#1F2937',
        'base-100': '#ffffff',
        'base-200': '#F3F4F6',
        'base-300': '#E5E7EB',
        info: '#0EA5E9',       // Sky blue
        success: '#10B981',    // Emerald
        warning: '#F59E0B',    // Amber
        error: '#EF4444',      // Red
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#7C3AED',
          secondary: '#2DD4BF',
          accent: '#F43F5E',
          neutral: '#1F2937',
          'base-100': '#ffffff',
          'base-200': '#F3F4F6',
          'base-300': '#E5E7EB',
          info: '#0EA5E9',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#A78BFA',    // Lighter purple for dark mode
          secondary: '#5EEAD4',  // Lighter teal
          accent: '#FB7185',     // Lighter rose
          'base-100': '#1F2937', // Dark blue-gray
          'base-200': '#111827', // Darker blue-gray
          'base-300': '#0F172A', // Darkest blue-gray
        },
      },
    ],
    darkTheme: 'dark',
    rtl: true,
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: false,
    themeRoot: ':root',
  },
}
