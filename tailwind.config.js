/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
      fontFamily: {
        antic: ["Antic Didone",'ui-serif'],
        roboto: ["Roboto",'ui-serif'],
        playfair: ["Playfair Display",'ui-serif'],
        poppins: ["Poppins",'ui-serif']
      }
    
  },
  plugins: [],
}

