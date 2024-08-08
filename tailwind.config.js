const { TranscriptPage } = require('twilio/lib/rest/intelligence/v2/transcript');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        tranparent: 'transparent',
        current: 'currentColor',
        white: '#f2f0f0',
        grey: '#4e4b4b',
        orange: '#c7520a',
        blue: '#104057',
        red: '#b02f2f',
      },
    },
  },
  plugins: [],
}