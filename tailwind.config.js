/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        // 🎨 Guedma brand palette
        primary: '#7A1F1F',        // deep Tunisian maroon (main color)
        'primary-light': '#A63A3A',
        'beige-bg': '#F3E7D6',     // background beige
        cream: '#FAF3E7',
        'dark-text': '#2B1A17',
        'light-text': '#FFFFFF',
        'accent-green': '#5DAA68', // small accent if needed
      },
    },
  },
  plugins: [],
};
