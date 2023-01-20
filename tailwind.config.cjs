/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      green: ' #3DB46D',
      white: '#fff',
      'light-gray': '#BDBDBD',
      'dark-gray': '#4F4F4F',
      black: '#333333',
      red: '#EB5757'
    },
    backgroundSize: {
      'w-20': '20px'
    },
    backgroundPosition: {
      'custom-position': 'left 1rem center'
    },
    extend: {
      backgroundImage: {
        'magnifying-glass': "url('/assets/magnifying-glass.svg')"
      }
    },
    fontFamily: {
      montserrat: 'Montserrat',
      'noto-sans': 'Noto Sans'
    }
  },
  plugins: []
}
