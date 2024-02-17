/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('./src/assets/login/background.jpg')",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

