/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  darkMode: 'class',
            theme: {
                extend: {
                animation: {
                'spin-slow': 'spin 3s linear infinite',
                'goyang' : 'goyang 1s ease-in-out infinite',
                }, 
                keyframes: {
                    goyang: {
                        '0%, 100%' : { transform: 'rotate (-10deg)'},
                        '50%': { transform: 'rotate(10deg)'},
                    }, 
                },
                colors: {
                  wpu: '#bada55',
                  kopi: '#c0ffee',
                },
                fontFamily: {
                  inter: ['Inter'],
                },
            }, },
  plugins: [],
}

