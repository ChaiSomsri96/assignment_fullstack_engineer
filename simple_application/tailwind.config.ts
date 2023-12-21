import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'variant': {
          'success': '#15B48E',
          'success-active': '#17a684',
          'success-progress': 'rgba(21, 180, 142, 0.25)',
          'error': '#EF6461',
          'error-active': '#db5f5c',
          'error-progress': 'rgba(239, 100, 97, 0.25)'
        },
        'badge': {
          'active': '#48DA82'
        },
        'label': {
          'default': '#2A2B38'
        },
        'border': {
          'gray1': '#B9BACC',
          'gray2': '#DCDDE5'
        }
      }
    },
  },
  plugins: [],
}
export default config
