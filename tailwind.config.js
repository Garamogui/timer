/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto',
        robotoMono: 'Roboto Mono',
      },
      colors: {
        grey100: '#E1E1E6',
        grey300: '#c4c4cc',
        grey400: '#8d8d99',
        grey500: '#7C7C8a',
        grey600: '#323238',
        grey700: '#29292E',
        grey800: '#202024',
        grey900: '#121214',

        gree300: '#00B37E',
        green500: '#00875F',
        green700: '#015F43',

        red500: '#AB222E',
        red700: '#7A1921',

        yellow500: '#FBA94C',
      },
    },
  },
  plugins: [],
}
