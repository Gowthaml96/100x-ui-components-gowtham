/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'neutral-1000':'#000000' 
       },
      width : {
        '20.8rem' :'334px',
        '4.06rem' : '65px'
       },
      dropShadow: {
        '3xl': '0px 8px 16px 0px rgba(0, 0, 0, 0.25)'
       },
      borderRadius:{
        '4.06rem': '65px'
      },
      backdropBlur:{
        '23.66' :'23.668209075927734px'
       },
      fontFamily:{
      'Inter':['Inter','sans-serif']
       },
      height:{
      '8.5':'35px'
       },
     }
  },
  plugins: [],
}

