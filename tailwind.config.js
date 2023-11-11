/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '560': '35rem',
      }
    },
    container: {
      center: true,
    },
    colors: {
      'green':'#00e291',
      'gOne': '#defbe0',
      'gTwo': '#f6fce1',
      'white': '#FFFFFF',
      'text-color': '#000248',
      'background-color': '#808080',
      'grey':'#ededf0',
    },
  },
  plugins: [],
}