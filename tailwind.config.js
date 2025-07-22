/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        krem: {
        100: "#FFF8E6"
      },
      green: {
        100: "#1D332C"
      },
      white:{
        100: "#FFFFFF"
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        'poppins-bold': ['Poppins-Black'],
        'poppins-thin': ['Poppins-Thin'],
      },
      }
    },
  },
  plugins: [],
}