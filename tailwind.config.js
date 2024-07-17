const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA599',
        secondary: '#F9F8F6',
        dark: '#212630',
        "text-color": "#454B51",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}