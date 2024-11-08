/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '112': '28rem', // 28rem equals 448px
      }
    },
  },
  plugins: [],
}

