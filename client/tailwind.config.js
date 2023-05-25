/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'hachiMP': ['Hachi Maru Pop', 'cursive'],
        'itim': ['Itim', 'cursive'],
        'notoSJP': ['Noto Sans JP', 'cursive'],
        'notoSKR': ['Noto Sans KR', 'cursive'],
        'sigmar': ['Sigmar', 'cursive'],
        'vt323': ['VT323', 'cursive']
      },
    },
  },
  plugins: [],
}

