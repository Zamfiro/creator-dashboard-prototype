/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.600rem',
      base: '0.8rem',
      xl: '1.066rem',
      '2xl': '1.421rem',
      '3xl': '1.894rem',
      '4xl': '2.525rem',
      '5xl': '3.366rem',
    },
    fontFamily: {
      heading: ['Poppins'],
      body: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    colors: {
      'text': 'var(--text)',
      'background': 'var(--background)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'accent': 'var(--accent)',
     },
    extend: {
      transitionProperty: {
        'height' : 'height'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },

  },
  plugins: [],
  darkMode: 'class',
}
