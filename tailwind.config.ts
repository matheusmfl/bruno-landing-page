import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-hero':
          'linear-gradient(180deg, rgba(30, 41, 59, 0) 50%, #1E293B 65.48%, #1E293B 86.45%), url(/bg-hero.webp)',
        hero: 'url(/bg-hero.webp)',
        vector: 'url(/bg-vector.svg)',
        video: 'url(/bg-video.webp)',
      },
      gradientColorStops: {
        'hero-color':
          'linear-gradient(0deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.75) 100%), lightgray 50%',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },

      keyframes: {
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        slideDown: 'slideDown 200ms cubic-bezier(0.42, 0, 0.58, 1)',
        slideUp: 'slideUp 400ms cubic-bezier(0.87, 0, 0.13, 1)',
      },
    },
  },
  plugins: [],
}
export default config
