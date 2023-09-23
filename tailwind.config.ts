import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors';

const localColors = {
  crimson: '#c00000',
};


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
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      crimson: localColors.crimson,
      primary: colors.black,
      secondary: localColors.crimson,
      tertiary: colors.white,
    }
  },
  plugins: [],
}
export default config
