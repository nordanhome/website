module.exports = {
  mode: 'jit',
  purge: [
    './docs/**/*.html'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'gradient-blue': { '50': '#045DE9', '100': '#09C6F9' },
        
      },
    },
    fontFamily: {
      sans: ['Spartan', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
