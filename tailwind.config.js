/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      width:{
        '1182':"1182px",
        '591':"591px",
        "1280" :"1280px",
        "794" :"794px",
        '250':"250px"
      },
      height:{
        '522':"522px",
        '261':"261px",
        '151':"151px",
        '75':"75px",
        '208':"208px",
        '450':"450px"
      },
      translate:{
        "custom-1" :"150px",
        "custom2":"230px"
      },
      colors:{
        red:{
          "900":"FBF1F1"
        }
      }
    },
  },
  plugins: [],
}

