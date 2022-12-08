const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [],
  theme: {
    fontFamily: {
      mono: [...defaultTheme.fontFamily.mono],
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      title: ['Dongle', ...defaultTheme.fontFamily.sans]
    },
  },
  plugins: [
  ],
}
